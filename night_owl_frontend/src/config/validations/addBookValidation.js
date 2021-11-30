import * as yup from 'yup';
import { number, string } from 'yup/lib/locale';

yup.setLocale({
    number:{
        default:"Invalid",
        min: "Field too short"
    },
    string:{
        default:"Invalid",
        min:"Field too short",
        url:"Not Valid"
    }
})

export const addBookschema = yup.object().shape({
        title:yup.string().min(4).required(),
        author_name:yup.string().min(1).required(),
        categories:yup.string().required(),
        cover: yup.string().url().required(),
        description:yup.string().min(4).required(),
        isbn:yup.number().min(4).required(),
        pages:yup.number().min(10).required(),
        website:yup.string().url().required(),
});

