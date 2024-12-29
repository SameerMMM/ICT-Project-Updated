import { FormateDate } from "../../Utils/FormateDate";


const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex item-center gap-2">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                        Ahamed
                    </span>
                </h3>
                <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere, optio atque quidem eligendi, accusamus suscipit adipisci ab, consectetur omnis nostrum. Sapiente libero impedit quis qui illo non, minima cumque perspiciatis inventore dolor, ab, ad necessitatibus delectus ipsum error tenetur dolorem excepturi? Ipsam placeat omnis quo soluta voluptatibus! A, adipisci! ipsum dolor sit amet, consectetur adipisicing elit. Fugit soluta quod quas voluptatem illum dicta? Unde fugit nostrum cum repudiandae accusantium sed reiciendis sequi inventore similique ipsum, aliquam quas quaerat quasi doloribus dolor dolorum distinctio quam. Tenetur nobis minus odit impedit quis. Nulla ut sunt quaerat dolore! Non, autem quos.</p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px] ">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {FormateDate("12-04-2004")}-{FormateDate("12-04-2019")}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                        </div>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                                New Apollo Hospital, Sri Lanka.
                        </p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px] ">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {FormateDate("12-04-2004")}-{FormateDate("12-04-2019")}
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                        </div>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                                New Apollo Hospital, Sri Lanka.
                        </p>
                    </li>
                </ul>
            </div> 

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Experience
                </h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {FormateDate("12-04-2004")}-{FormateDate("12-04-2019")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                                Sr. Surgeon
                        </p>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                                New Apollo Hospital, Sri Lanka.
                        </p>
                    </li>
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {FormateDate("12-04-2004")}-{FormateDate("12-04-2019")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                                Sr. Surgeon
                        </p>
                        <p className="text-[14px] leading-6 font-medium text-textColor">
                                New Apollo Hospital, Sri Lanka.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DoctorAbout;