import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent_create"

function CreateProject() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={illustration}
                        alt="CodeHub Illustration"
                        className="mx-auto w-[300px] sm:w-[500px]"
                    />
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default CreateProject
