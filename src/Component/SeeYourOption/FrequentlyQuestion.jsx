import { ChevronDown } from "lucide-react";

const questions = [
    'When my selling my house, where should i begin?',
    'Where are cash offers available?',
    'How do Zillow partner agents help sell homes faster and for more?',
    'What are the benefits of having your home listed on public portals such as Zillow vs.on a private listing network?',
    'How long does it take to sell a house?',
    'What home seller mistakes should i avoid?',
    'What is an MLS?',
    'What is the Clear Cooperation Policy?',
    'What is a pocket listing?'
]

function FrequentlyQuestion(){
    return(
        <div className="flex flex-col items-center justify-center gap-8 ">
            <header>
                <h1 className="text-4xl font-bold">Frequently asked questions</h1>
            </header>
            
            <ul className="flex flex-col gap-4">
                {
                questions.map(question => (
                    <li className="border-b flex justify-between gap-10 font-semibold">
                        {question}
                        <span><ChevronDown color="blue"/></span>
                        </li>
                ))
            }
            </ul>
            <div className="flex gap-2">
                <div className="bg-orange-600 h-15 w-10 rounded-tl-full"></div>
                <div className="bg-blue-600 h-15 w-10"></div>
                <div className="bg-green-600 h-15 w-10 rounded-t-full"></div>
            </div>
        </div>
    )
}
export default FrequentlyQuestion;