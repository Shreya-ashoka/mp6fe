import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/predict', data);
            navigate('/results', { state: { result: response.data.result } });
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Smokes:</label>
                <input type="number" {...register('Smokes', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.Smokes && <p>Smokes is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>Hormonal Contraceptives:</label>
                <input type="number" {...register('HormonalContraceptives', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.HormonalContraceptives && <p>Hormonal Contraceptives is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>IUD:</label>
                <input type="number" {...register('IUD', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.IUD && <p>IUD is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs:</label>
                <input type="number" {...register('STDs', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs && <p>STDs is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: condylomatosis:</label>
                <input type="number" {...register('STDs_condylomatosis', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_condylomatosis && <p>STDs: condylomatosis is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: cervical condylomatosis:</label>
                <input type="number" {...register('STDs_cervical_condylomatosis', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_cervical_condylomatosis && <p>STDs: cervical condylomatosis is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: vaginal condylomatosis:</label>
                <input type="number" {...register('STDs_vaginal_condylomatosis', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_vaginal_condylomatosis && <p>STDs: vaginal condylomatosis is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: vulvo-perineal condylomatosis:</label>
                <input type="number" {...register('STDs_vulvo_perineal_condylomatosis', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_vulvo_perineal_condylomatosis && <p>STDs: vulvo-perineal condylomatosis is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: syphilis:</label>
                <input type="number" {...register('STDs_syphilis', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_syphilis && <p>STDs: syphilis is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: pelvic inflammatory disease:</label>
                <input type="number" {...register('STDs_pelvic_inflammatory_disease', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_pelvic_inflammatory_disease && <p>STDs: pelvic inflammatory disease is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: genital herpes:</label>
                <input type="number" {...register('STDs_genital_herpes', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_genital_herpes && <p>STDs: genital herpes is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: molluscum contagiosum:</label>
                <input type="number" {...register('STDs_molluscum_contagiosum', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_molluscum_contagiosum && <p>STDs: molluscum contagiosum is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: AIDS:</label>
                <input type="number" {...register('STDs_AIDS', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_AIDS && <p>STDs: AIDS is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: HIV:</label>
                <input type="number" {...register('STDs_HIV', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_HIV && <p>STDs: HIV is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: Hepatitis B:</label>
                <input type="number" {...register('STDs_Hepatitis_B', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_Hepatitis_B && <p>STDs: Hepatitis B is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>STDs: HPV:</label>
                <input type="number" {...register('STDs_HPV', { required: true, min: 0, max: 1 })} placeholder="0 or 1" />
                {errors.STDs_HPV && <p>STDs: HPV is required and should be 0 or 1.</p>}
            </div>
            <div>
                <label>Age:</label>
                <input type="number" {...register('Age', { required: true, min: 0, max: 120 })} placeholder="Age" />
                {errors.Age && <p>Age is required and must be between 0 and 120.</p>}
            </div>
            <div>
                <label>Number of sexual partners:</label>
                <input type="number" {...register('Number_of_sexual_partners', { required: true, min: 0, max: 20 })} placeholder="Number of sexual partners" />
                {errors.Number_of_sexual_partners && <p>Number of sexual partners is required and must be between 0 and 20.</p>}
            </div>
            <div>
                <label>First sexual intercourse:</label>
                <input type="number" {...register('First_sexual_intercourse', { required: true, min: 0, max: 120 })} placeholder="Age at first sexual intercourse" />
                {errors.First_sexual_intercourse && <p>First sexual intercourse is required and must be between 0 and 120.</p>}
            </div>
            <div>
                <label>Num of pregnancies:</label>
                <input type="number" {...register('Num_of_pregnancies', { required: true, min: 0, max: 20 })} placeholder="Number of pregnancies" />
                {errors.Num_of_pregnancies && <p>Num of pregnancies is required and must be between 0 and 20.</p>}
            </div>
            <div>
                <label>Smokes (years):</label>
                <input type="number" {...register('Smokes_years', { required: true, min: 0, max: 100 })} placeholder="Years smoking" />
                {errors.Smokes_years && <p>Smokes (years) is required and must be between 0 and 100.</p>}
            </div>
            <div>
                <label>Smokes (packs/year):</label>
                <input type="number" {...register('Smokes_packs_per_year', { required: true, min: 0, max: 10 })} placeholder="Packs per year" />
                {errors.Smokes_packs_per_year && <p>Smokes (packs/year) is required and must be between 0 and 10.</p>}
            </div>
            <div>
                <label>Hormonal Contraceptives (years):</label>
                <input type="number" {...register('HormonalContraceptives_years', { required: true, min: 0, max: 50 })} placeholder="Years using hormonal contraceptives" />
                {errors.HormonalContraceptives_years && <p>Hormonal Contraceptives (years) is required and must be between 0 and 50.</p>}
            </div>
            <div>
                <label>IUD (years):</label>
                <input type="number" {...register('IUD_years', { required: true, min: 0, max: 50 })} placeholder="Years with IUD" />
                {errors.IUD_years && <p>IUD (years) is required and must be between 0 and 50.</p>}
            </div>
            <div>
                <label>STDs (number):</label>
                <input type="number" {...register('STDs_number', { required: true, min: 0, max: 10 })} placeholder="Number of STDs" />
                {errors.STDs_number && <p>STDs (number) is required and must be between 0 and 10.</p>}
            </div>
            <div>
                <label>STDs: Number of diagnosis:</label>
                <input type="number" {...register('STDs_Number_of_diagnoses', { required: true, min: 0, max: 10 })} placeholder="Number of STD diagnoses" />
                {errors.STDs_Number_of_diagnoses && <p>STDs: Number of diagnosis is required and must be between 0 and 10.</p>}
            </div>
            <div>
                <label>Dx: Cancer:</label>
                <input type="number" {...register('Dx_Cancer', { required: true, min: 0, max: 5 })} placeholder="Dx Cancer" />
                {errors.Dx_Cancer && <p>Dx: Cancer is required and must be between 0 and 5.</p>}
            </div>
            <div>
                <label>Dx: CIN:</label>
                <input type="number" {...register('Dx_CIN', { required: true, min: 0, max: 5 })} placeholder="Dx CIN" />
                {errors.Dx_CIN && <p>Dx: CIN is required and must be between 0 and 5.</p>}
            </div>
            <div>
                <label>Dx: HPV:</label>
                <input type="number" {...register('Dx_HPV', { required: true, min: 0, max: 5 })} placeholder="Dx HPV" />
                {errors.Dx_HPV && <p>Dx: HPV is required and must be between 0 and 5.</p>}
            </div>
            <div>
                <label>Dx:</label>
                <input type="number" {...register('Dx', { required: true, min: 0, max: 5 })} placeholder="Dx" />
                {errors.Dx && <p>Dx is required and must be between 0 and 5.</p>}
            </div>
            <div>
                <label>Hinselmann:</label>
                <input type="number" {...register('Hinselmann', { required: true, min: 0, max: 10 })} placeholder="Hinselmann" />
                {errors.Hinselmann && <p>Hinselmann is required and must be between 0 and 10.</p>}
            </div>
            <div>
                <label>Schiller:</label>
                <input type="number" {...register('Schiller', { required: true, min: 0, max: 10 })} placeholder="Schiller" />
                {errors.Schiller && <p>Schiller is required and must be between 0 and 10.</p>}
            </div>
            <div>
                <label>Citology:</label>
                <input type="number" {...register('Citology', { required: true, min: 0, max: 10 })} placeholder="Citology" />
                {errors.Citology && <p>Citology is required and must be between 0 and 10.</p>}
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => navigate('/home')}>Back</button>
        </form>
    );
};

export default Form;
