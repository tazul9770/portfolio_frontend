import { useForm } from "react-hook-form";

const HookForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="m-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="name" className="mb-2 text-gray-700 text-sm font-semibold">Name: </label>
                <input 
                    {...register("name")}
                    id="name" type="text" 
                    className="mt-1 px-3 py-2 border border-blue-600 rounded-b-lg w-full focus:outline-none focus:ring-1 focus:ring-green-700"
                />

                <label htmlFor="age" className="font-semibold text-gray-700 text-sm">Age: </label>
                <input 
                    {...register("age", {required:true, min:18})}
                    id="age" 
                    type="number" className="mt-1 px-3 py-2 border border-blue-600 rounded-b-lg w-full focus:outline-none focus:ring-1 focus:ring-green-700"
                />
                {errors.age?.type === 'required' && <p className=" text-red-600 mt-1 text-sm">This field is required</p> }
                
                {errors.age?.type === 'min' && <p className=" text-red-600 mt-1 text-sm">Minimum 18 needed</p> }

                <button 
                    className="mt-3 px-3 py-2 text-white bg-blue-500 rounded-md cursor-pointer w-full focus:outline-none focus:ring-1 focus:ring-blue-700"
                >Submit</button>
            </form>
        </div>
    );
};

export default HookForm;