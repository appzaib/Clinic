import Link from "next/link"
import MapComponent from "../components/test"





export default function Location() {

    return (
        <>
        <div className="min-h-screen bg-gray-100">
      <MapComponent />
    </div>
            <div className="flex flex-wrap lg:px-40">
                <div className="pt-5 w-2/3 mx-auto ">
                    <h2 className="text-2xl py-2 font-semibold">Facilities</h2>
                    <div className="py-2 pr-3">
                        <Link href={"#"}>
                            <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jHPtEXMrY2MO1ztSoNPuZlvFhO6Brcn8FA&usqp=CAU" alt="img" />
                        </Link>
                    </div>
                    <div className="py-2 pr-3">
                        <Link href={"#"}>
                            <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpO7CGpDwBxapIk6_es8P3t2B4hwV0hqwXYw&usqp=CAU" alt="img" />
                        </Link>
                    </div>
                    <div className="py-2 pr-3">
                        <Link href={"#"}>
                            <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAW-SGaMYojcQBU7xTtECeeHDjnbWJlDPaaw&usqp=CAU" alt="img" />
                        </Link>
                    </div>
                    <div className="py-2 pr-3">
                        <Link href={"#"}>
                            <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_21AuibBSVxXrFR0o6EP0mYXPDHj8cBsmJg&usqp=CAU" alt="img" />
                        </Link>
                    </div>

                </div>

            </div>
        </>

    )

}