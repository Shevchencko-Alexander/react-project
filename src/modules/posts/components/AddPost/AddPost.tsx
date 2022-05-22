import styles from './AddPost.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { requestAddPosts } from '../../../../reducers/postsReducer';

export const AddPost: React.FC = () => {
   const dispatch = useDispatch<AppDispatch>();

   const formik = useFormik({
      initialValues: {
         post: '',
      },
      validationSchema: Yup.object({
         post: Yup.string()
            .max(80, 'Must be 20 characters or less')
            .required('Field is required!'),
      }),
      onSubmit: (values, { resetForm }) => {
         let payload = {
            userId: 1,
            body: values.post,
            name: 'Mr. Jack',
            email: 'Eliseo@gardner.biz',
         };
         dispatch(requestAddPosts(payload));
         resetForm();
      },
   });

   return (
      <form onSubmit={formik.handleSubmit} className={styles.form}>
         <div className={styles.container}>
            <label className={styles.label} htmlFor='post'>
               Add new post
            </label>
            <input
               className={styles.input}
               id='post'
               name='post'
               type='text'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.post}
            />
            <button
               className={styles.button}
               disabled={!formik.isValid}
               type='submit'
            >
               Add
            </button>
            {formik.touched.post && formik.errors.post ? (
               <p className={styles.error}>{formik.errors.post}</p>
            ) : null}
         </div>
      </form>
   );
};
