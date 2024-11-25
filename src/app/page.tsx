"use client";

import InstallPrompt from "./components/InstallPrompt";

export default function Home() {
    return (
        <div className="w-screen h-screen px-3 pt-10 pb-[100px] flex flex-col justify-between bg-gradient-to-br from-black/0 via-black/20 to-black/40">
            <img
                src="https://s3-alpha-sig.figma.com/img/88c5/ba94/7749f3110f5987917c742db34a329603?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUJjOkVzmQFNlWzplMnCVI1doWAoHdjHdAkNB4morFYC6loBoQIpNmEJIAZin4gI14J2qeNe-g7DxsVbyqZa9vd5kta5WQqfW1ggwbbaID0Ed9enPoPfGww~GxCBQJ97SYBJ0oOHMjV0kS1vcwOunsQ0ZEUndAHE19zQhm62iFlCemTFLATFhh5n6rUqTAkdgm54uP2BsVkPR4EslfL7W8JM-4Os0FqX7DUuU~MPvlv5v1H6ZkkxO6yxIDUKgAft1-FYXfjjxjzyCWNjN1wCEIJ2gyFLn5qwXTYH3twHYOHxXoJrCK89YGg2BKZVAtTB~jCZnGWSIrUwZ5S-VncZag__"
                alt=""
                className="absolute z-[-5] h-full w-auto object-cover object-[55%] top-0 left-0"
            />
            <span className="flex justify-center items-center w-[126px] h-[81px] bg-[#B2B0B0] text-[20px] font-[350]">
                ლოგო
            </span>
            <div className="flex items-center flex-col gap-12">
                <div className="w-full flex flex-col gap-12">
                    <h1 className="text-white text-[35px] font-[700]">გამარჯობა!</h1>
                    <p className="text-white text-[20px]">დაჯავშნე შენი საპარკინგე ადგილი</p>
                </div>
                <button
                    onClick={() => {
                        console.log("გაგრძელება");
                    }}
                    className="bg-[#4BA46C] text-[28px] text-white flex justify-center items-center w-[267px] h-[65px] rounded-[14px]"
                >
                    გაგრძელება
                </button>
            </div>
            <InstallPrompt />
        </div>
    );
}
