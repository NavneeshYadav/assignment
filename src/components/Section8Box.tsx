"use client";

interface MyComponentProps {

    cont: String;

}


const Section8Box: React.FC<MyComponentProps> = ({ cont }) => {
    return (
        <div className="rounded-lg text-center bg-slate-400 py-5">

    
            <img className="block mx-auto mt-7 mb-4 w-20 h-20" src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66aa009a4487cd01d6d0225d_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif" alt="images" />
            

            <p className="">{cont}</p>
        </div>
    )

}
export default Section8Box;