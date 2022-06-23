export default function OptionsPassword() {
    return (
        <div className="flex  justify-between mb-6">
            <div>
                <input className="w-3 h-3 mx-2" type="checkbox" value="" />
                <label > Lembrar de mim </label>
            </div>
                <a className=" hover:underline " href="#">Esqueceu sua senha?</a>
        </div>
    )
}