import { Shield, HelpCircle, CheckCheck, CheckIcon, CrossIcon, Crosshair } from "lucide-react";
import Link from "next/link";

// Define props
interface CancellationPolicyProps {
    policy: any;
}

export function CancellationPolicy({ policy }: CancellationPolicyProps) {
    return (
        <section className="py-8 border-b border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-[#1a2b49] mb-4">Cancellation Policy</h2>
                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-gray-600 text-sm mb-3">
                                <CheckIcon className="inline w-4 h-4 text-[#f53] mr-1" /> {policy?.description}
                            </p>
                            {policy?.weather == true && <p className="text-gray-600 text-sm mb-3">
                                <CheckIcon className="inline w-4 h-4 text-[#f53] mr-1" /> Supplier of this tour may cancel on account of weather conditions.
                            </p>}
                            {policy?.traveler == true && <p className="text-gray-600 text-sm mb-3">
                                <CheckIcon className="inline w-4 h-4 text-[#f53] mr-1" /> Supplier of this tour can cancel due to too few participants.
                            </p>}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[#1a2b49] mb-4">Questions?</h2>
                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-gray-600 text-sm mb-3">If you have questions about this tour or need help with your booking, we're here to help.</p>
                            <Link href="/contact">
                                <button className="text-[#f53] text-sm font-medium hover:underline cursor-pointer">Contact us →</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
