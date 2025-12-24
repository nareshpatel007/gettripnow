"use client"

import { useState } from "react"
import {
    Calendar,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Shield,
    Clock,
    Users,
    Check,
    X,
    Minus,
    Plus,
    Verified,
} from "lucide-react"

const bookingOptions = [
    {
        id: 1,
        name: "28' Scout - 4HR",
        description:
            "Popular Itinerary Option: - Stingray City + Snorkeling or Starfish Point + Food @ Kaibo Beach Club - Stingray City + 2 Snorkel spots and Starfish Point",
        price: 995,
        perGroup: true,
        maxPeople: 8,
        timeSlots: [
            "2:30 PM",
            "7:00 AM",
            "7:30 AM",
            "8:00 AM",
            "8:30 AM",
            "9:00 AM",
            "9:30 AM",
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
            "1:00 PM",
            "1:30 PM",
            "2:00 PM",
        ],
    },
    {
        id: 2,
        name: "23' Concept - 3HR",
        description:
            "Stingray City + Snorkeling at Coral Gardens + Starfish Point - A perfect half-day adventure exploring the best of Grand Cayman waters.",
        price: 775,
        perGroup: true,
        maxPeople: 6,
        timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
    },
    {
        id: 3,
        name: "23' Concept - 1.5HR",
        description:
            "Quick Stingray City visit - Perfect for those short on time but wanting to experience the famous Stingray City sandbar.",
        price: 550,
        perGroup: true,
        maxPeople: 6,
        timeSlots: ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
    },
    {
        id: 4,
        name: "28' Scout - 2HR",
        description:
            "Stingray City Express - A quick but memorable trip to swim with the stingrays at the world-famous sandbar.",
        price: 775,
        perGroup: true,
        maxPeople: 8,
        timeSlots: ["7:00 AM", "9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
    },
]

const generateMonthCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay() // 0 = Sunday

    const days: (number | null)[] = []

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
        days.push(null)
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
    }

    return days
}

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Define props
interface Props {
    tourData: any;
}

type AgeBand = {
    ageBand: string
    startAge: number
    endAge: number
    minTravelersPerBooking: number
    maxTravelersPerBooking: number
}

const labelMap: Record<string, string> = {
    ADULT: 'Adults',
    CHILD: 'Children',
    INFANT: 'Infants',
    TRAVELER: 'Travelers',
}

export function TourBookingSidebar({ tourData }: Props) {
    // Define state
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTravelerPicker, setShowTravelerPicker] = useState(false);
    const [showBookingOptions, setShowBookingOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("2:30 PM");
    const [showAllOptions, setShowAllOptions] = useState(false);
    const [expandedDescription, setExpandedDescription] = useState(false);

    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    // Define traveler state
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [travelers, setTravelers] = useState(0);

    // Generate calendar
    const calendarDays = generateMonthCalendar(currentYear, currentMonth);
    const currentOption = bookingOptions.find((opt) => opt.id === selectedOption);

    // const totalTravelers = adults + children + infants;

    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    }

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    const isDateInPast = (day: number) => {
        const date = new Date(currentYear, currentMonth, day)
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        return date < todayStart
    }

    const isSelectedDate = (day: number) => {
        if (!selectedDate) return false
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
        )
    }

    const formatSelectedDate = () => {
        if (!selectedDate) return "Choose a date";
        return selectedDate.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    const formatTravelers = () => {
        const parts: any = [];
        if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
        if (children > 0) parts.push(`${children} Child${children > 1 ? "ren" : ""}`);
        if (infants > 0) parts.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
        if (travelers > 0) parts.push(`${travelers} Traveler${travelers > 1 ? "s" : ""}`);
        return parts.length > 0 ? parts.join(", ") : "Choose Travelers";
    }

    const handleCheckAvailability = () => {
        if (!selectedDate) {
            setShowDatePicker(true)
            return
        }
        setShowBookingOptions(true)
    }

    // Update traveler count
    const updateTravellerCount = (action: string, band: AgeBand) => {
        if (action === "plus") {
            if (band.ageBand === "ADULT") {
                // If adults is less than max adults
                if (adults < band.maxTravelersPerBooking) {
                    setAdults(adults + 1);
                }
            } else if (band.ageBand === "CHILD") {
                // If children is less than max children
                if (children < band.maxTravelersPerBooking) {
                    setChildren(children + 1);
                }
            } else if (band.ageBand === "INFANT") {
                // If infants is less than max infants
                if (infants < band.maxTravelersPerBooking) {
                    setInfants(infants + 1);
                }
            } else if (band.ageBand === "TRAVELER") {
                // If travelers is less than max travelers
                if (travelers < band.maxTravelersPerBooking) {
                    setTravelers(travelers + 1);
                }
            }
        } else {
            if (band.ageBand === "ADULT") {
                // If adults is greater than min adults
                if (adults > band.minTravelersPerBooking) {
                    setAdults(adults - 1);
                }
            } else if (band.ageBand === "CHILD") {
                // If children is greater than min children
                if (children > band.minTravelersPerBooking) {
                    setChildren(children - 1);
                }
            } else if (band.ageBand === "INFANT") {
                // If infants is greater than min infants
                if (infants > band.minTravelersPerBooking) {
                    setInfants(infants - 1);
                }
            } else if (band.ageBand === "TRAVELER") {
                // If travelers is greater than min travelers
                if (travelers > band.minTravelersPerBooking) {
                    setTravelers(travelers - 1);
                }
            }
        }
    }

    const visibleOptions = showAllOptions ? bookingOptions : bookingOptions.slice(0, 4);

    const canGoPrevious = currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth());

    return (
        <>
            <div className="mt-5 md:mt-0">
                <div className="border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm bg-white">
                    <div className="mb-4 md:mb-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-md text-gray-600">From</span>
                            <span className="text-2xl md:text-3xl font-bold text-[#1a2b49]">
                                ${tourData?.tour?.discount_price}
                            </span>
                            <span className="text-gray-600 text-sm">
                                {tourData?.pricing_info?.type == 'PER_PERSON' ? 'per person' : 'per group'}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3 md:mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select date</label>
                        <button
                            onClick={() => {
                                setShowDatePicker(!showDatePicker)
                                setShowTravelerPicker(false)
                            }}
                            className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 md:px-4 py-2.5 text-left hover:border-gray-400 cursor-pointer transition-colors"
                        >
                            <div className="flex items-center gap-2 md:gap-3">
                                <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span className={`text-sm md:text-base ${selectedDate ? "text-gray-900" : "text-gray-500"}`}>
                                    {formatSelectedDate()}
                                </span>
                            </div>
                            <ChevronDown
                                className={`h-4 w-4 md:h-5 md:w-5 text-gray-400 transition-transform ${showDatePicker ? "rotate-180" : ""}`}
                            />
                        </button>
                        {showDatePicker && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 md:p-4">
                                <div className="flex items-center justify-between mb-3 md:mb-4">
                                    <button
                                        onClick={goToPreviousMonth}
                                        disabled={!canGoPrevious}
                                        className={`p-1 rounded-full cursor-pointer ${canGoPrevious ? "hover:bg-gray-100" : "opacity-30 cursor-not-allowed"}`}
                                    >
                                        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                                    </button>
                                    <span className="font-semibold text-[#1a2b49] text-sm md:text-base">
                                        {monthNames[currentMonth]} {currentYear}
                                    </span>
                                    <button onClick={goToNextMonth} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                                        <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {dayNames.map((day) => (
                                        <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                                            {day}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    {calendarDays.map((day, index) => (
                                        <div key={index} className="aspect-square">
                                            {day !== null ? (
                                                <button
                                                    onClick={() => {
                                                        if (!isDateInPast(day)) {
                                                            setSelectedDate(new Date(currentYear, currentMonth, day))
                                                            setShowDatePicker(false)
                                                        }
                                                    }}
                                                    disabled={isDateInPast(day)}
                                                    className={`w-full h-full flex items-center justify-center text-xs cursor-pointer md:text-sm rounded-full transition-colors ${isSelectedDate(day)
                                                        ? "bg-[#f53] text-white"
                                                        : isDateInPast(day)
                                                            ? "text-gray-300 cursor-not-allowed"
                                                            : "hover:bg-gray-100 text-gray-700"
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            ) : (
                                                <div />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-4 md:mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                        <button
                            onClick={() => {
                                setShowTravelerPicker(!showTravelerPicker)
                                setShowDatePicker(false)
                            }}
                            className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 md:px-4 py-2.5 text-left hover:border-gray-400 cursor-pointer transition-colors"
                        >
                            <div className="flex items-center gap-2 md:gap-3">
                                <Users className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span className={`text-sm md:text-base ${selectedDate ? "text-gray-900" : "text-gray-500"}`}>
                                    {formatTravelers()}
                                </span>
                            </div>
                            <ChevronDown
                                className={`h-4 w-4 md:h-5 md:w-5 text-gray-400 transition-transform ${showTravelerPicker ? "rotate-180" : ""}`}
                            />
                        </button>
                        {showTravelerPicker && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 md:p-4">
                                <div className="space-y-1">
                                    {tourData?.pricing_info?.ageBands.map((band: any, index: number) => {
                                        let value = 0;
                                        if(band.ageBand === 'ADULT') {
                                            value = Number(adults);
                                        } else if(band.ageBand === 'CHILD') {
                                            value = Number(children);
                                        } else if(band.ageBand === 'INFANT') {
                                            value = Number(infants);
                                        } else if(band.ageBand === 'TRAVELER') {
                                            value = Number(travelers);
                                        }
                                        return (
                                            <div
                                                key={band.ageBand}
                                                className={`flex items-center justify-between py-2 md:py-3 ${index !== tourData?.pricing_info.ageBands.length - 1 ? 'border-b border-gray-100' : ''}`}
                                            >
                                                <div>
                                                    <p className="font-medium text-gray-900 text-sm md:text-base">
                                                        {labelMap[band.ageBand] ?? band.ageBand}
                                                    </p>
                                                    <p className="text-xs md:text-sm text-gray-500">
                                                        Age {band.startAge}–{band.endAge === 99 ? '+' : band.endAge}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 md:gap-3">
                                                    <button
                                                        onClick={() => updateTravellerCount('minus', band)}
                                                        disabled={value <= band.minTravelersPerBooking}
                                                        className={`w-6 h-6 cursor-pointer rounded-full border flex items-center justify-center
                                                            ${value <= band.minTravelersPerBooking
                                                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                                : 'border-gray-300 text-gray-600 hover:border-[#f53] hover:text-[#f53]'
                                                            }`}
                                                    >
                                                        <Minus className="h-3 w-3 md:h-4 md:w-4" />
                                                    </button>
                                                    <span className="w-6 md:w-8 text-center font-medium text-gray-900 text-sm md:text-base">
                                                        {value}
                                                    </span>
                                                    <button
                                                        onClick={() => updateTravellerCount('plus', band)}
                                                        disabled={value >= band.maxTravelersPerBooking}
                                                        className={`w-6 h-6 cursor-pointer rounded-full border flex items-center justify-center
                                                            ${value >= band.maxTravelersPerBooking
                                                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                                : 'border-gray-300 text-gray-600 hover:border-[#f53] hover:text-[#f53]'
                                                            }`}
                                                    >
                                                        <Plus className="h-3 w-3 md:h-4 md:w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <button
                                    onClick={() => setShowTravelerPicker(false)}
                                    className="w-full mt-3 md:mt-4 bg-[#f53] hover:bg-[#c34026] text-white font-medium py-2 md:py-2.5 rounded-lg transition-colors text-sm md:text-base cursor-pointer"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleCheckAvailability}
                        className="w-full bg-[#f53] hover:bg-[#c34026] text-white font-semibold py-3 cursor-pointer rounded-lg mb-3 md:mb-4 transition-colors text-sm md:text-base"
                    >
                        Check Availability
                    </button>

                    {/* Tour Info */}
                    <div className="border-t border-gray-200 pt-3 md:pt-4 space-y-2 md:space-y-3">
                        {tourData?.duration_format && <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                            <Clock className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                            <span className="text-gray-600">Duration: {tourData?.duration_format}</span>
                        </div>}
                        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                            <Users className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                            <span className="text-gray-600">Small group: Max {tourData?.booking_requirements?.maxTravelersPerBooking} people</span>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {tourData?.tour?.is_refundable && <span className="bg-green-100 text-green-800 text-xs font-medium px-2 md:px-2.5 py-0.5 md:py-1 rounded">
                                Free Cancellation
                            </span>}
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 md:px-2.5 py-0.5 md:py-1 rounded">
                                Instant Confirmation
                            </span>
                        </div>
                    </div>
                </div>

                {/* Lowest Price Guarantee */}
                <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500">
                    <Verified className="h-3 w-3 md:h-4 md:w-4 text-[#f53]" />
                    <span>Lowest Price Guarantee</span>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xs text-gray-500">From</span>
                            <span className="text-xl font-bold text-gray-900">{tourData?.tour?.discount_price}</span>
                        </div>
                        <p className="text-xs text-gray-500">
                            {tourData?.pricing_info?.type == 'PER_PERSON' ? 'per person' : 'per group'}
                        </p>
                    </div>
                    <button
                        onClick={() => setShowBookingOptions(true)}
                        className="flex-1 max-w-[200px] bg-[#f53] hover:bg-[#1A2B49] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                    >
                        Check Availability
                    </button>
                </div>
            </div>

            {showBookingOptions && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
                    <div className="bg-white w-full md:max-w-3xl md:rounded-xl rounded-t-xl shadow-2xl max-h-[95vh] md:max-h-[90vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#1A2B49]">
                            <h2 className="text-lg font-bold text-white">Select Options</h2>
                            <button
                                onClick={() => setShowBookingOptions(false)}
                                className="p-1.5 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                            >
                                <X className="h-5 w-5 text-white" />
                            </button>
                        </div>

                        {/* Date & Travelers Selection (shown in modal on mobile) */}
                        <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <span className="font-medium">{formatSelectedDate()}</span>
                                    </div>
                                    <span className="text-gray-300">|</span>
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <Users className="h-4 w-4 text-gray-500" />
                                        <span className="font-medium">{formatTravelers()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tour Options */}
                        <div className="p-4 space-y-3 max-h-[40vh] overflow-y-auto">
                            <p className="text-sm font-medium text-gray-700 mb-2">Select Tour Option</p>
                            {bookingOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedOption === option.id
                                        ? "border-[#1A2B49] bg-[#1A2B49]/5"
                                        : "border-gray-200 hover:border-gray-300"
                                        }`}
                                    onClick={() => setSelectedOption(option.id)}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 text-sm">{option.name}</h3>
                                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{option.description}</p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ml-3 flex-shrink-0 ${selectedOption === option.id ? "border-[#1A2B49] bg-[#1A2B49]" : "border-gray-300"
                                                }`}
                                        >
                                            {selectedOption === option.id && <Check className="h-3 w-3 text-white" />}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-gray-500">Max {option.maxPeople} people</span>
                                        <span className="font-bold text-[#f53]">${option.price}</span>
                                    </div>

                                    {/* Time Slots - Show when selected */}
                                    {selectedOption === option.id && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <p className="text-sm font-medium text-gray-700 mb-3">Available Times</p>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                                {option.timeSlots.map((time) => (
                                                    <button
                                                        key={time}
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setSelectedTimeSlot(time)
                                                        }}
                                                        className={`px-2 py-2 text-xs rounded-lg border transition-colors cursor-pointer ${selectedTimeSlot === time
                                                            ? "border-[#1A2B49] bg-[#1A2B49] text-white"
                                                            : "border-gray-200 hover:border-[#1A2B49] text-gray-700"
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t border-gray-200 bg-gray-50">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-600">Total</span>
                                <span className="text-xl font-bold text-[#1A2B49]">${currentOption?.price || 0}</span>
                            </div>
                            <button
                                onClick={() => {
                                    setShowBookingOptions(false)
                                    window.location.href = "/cart"
                                }}
                                className="w-full bg-[#f53] hover:bg-[#1A2B49] text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer"
                            >
                                Continue to Book
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
