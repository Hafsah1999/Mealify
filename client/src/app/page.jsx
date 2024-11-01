'use client'
import React, { useState } from 'react'
import Navbar from './(main)/navbar'

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the recipe matching with ingredients work?",
      answer: "Our smart algorithm matches recipes based on ingredients you have in your pantry. Simply mark the ingredients you have available, and we'll show you recipes you can make right now, along with suggestions for what else you might need."
    },
    {
      question: "Can I filter recipes based on dietary restrictions?",
      answer: "Yes! You can filter recipes based on various dietary preferences including vegetarian, vegan, gluten-free, dairy-free, keto, and more. You can also exclude specific ingredients or allergens from your search results."
    },
    {
      question: "How does the meal planning feature work?",
      answer: "Our meal planner allows you to drag and drop recipes into a weekly calendar. You can plan meals for the entire week, and we'll automatically generate a consolidated shopping list of all ingredients needed for your planned meals."
    },
    {
      question: "Can I save my favorite recipes?",
      answer: "Absolutely! You can bookmark any recipe to your favorites collection. You can also create custom collections like 'Quick Weeknight Dinners' or 'Kid-Friendly Meals' to organize your saved recipes."
    },
    {
      question: "How do I track my pantry ingredients?",
      answer: "Use our pantry management feature to keep track of what ingredients you have on hand. You can manually add items or scan product barcodes. We'll help you track expiration dates and suggest recipes to use ingredients before they spoil."
    }
  ];

  return (
 <div>
 <Navbar />

     <div className="bg-[#f4f1de]">

 {/* Section 1 */}

 <div className="relative isolate px-6 pt-8 lg:px-8">
      <div 
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-400 to-yellow-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/4 text-[#3d405b] ring-1 ring-[#e07a5f]/10 hover:ring-[#e07a5f]/20">
            Find recipes based on ingredients you have{" "}
            <a href="#pantry" className="font-semibold text-[#81b29a]">
              <span className="absolute inset-0" aria-hidden="true" />
              Check your pantry <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#e07a5f] sm:text-5xl">
            Your Personal Recipe Finder & Meal Planner
          </h1>
          <p className="mt-8 text-pretty text-sm  text-[#3d405b] sm:text-xl/6">
            Discover recipes that match your ingredients, dietary preferences, and cooking style. 
            Plan your meals effortlessly and save your favorite recipes all in one place.
          </p>
          
       
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#search"
              className="rounded-md bg-[#e07a5f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e07a5f]"
            >
              Find Recipes
            </a>
            <a href="#meal-plan" className="text-sm/6 font-semibold text-[#e07a5f]">
              Create Meal Plan <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

{/* Section2 */}


  <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-24 lg:px-8">
    <div className="relative isolate overflow-hidden bg-[#e07a5f] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,[#f4f1de],transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#e07a5f" />
            <stop offset={1} stopColor="#f2cc8f" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#f4f1de] sm:text-4xl">
        Transform Your Cooking Experience with Smart Recipe Planning
        </h2>
        <p className="mt-6 text-pretty text-lg/6 text-gray-300">
        Never waste ingredients again. Our smart recipe finder matches your available ingredients with delicious recipes, while our meal planner helps you organize your weekly menu effortlessly.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a
            href="#"
            className="rounded-md bg-[#f4f1de] px-3.5 py-2.5 text-sm font-semibold text-[#e07a5f] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4f1de]"
          >
            Start Cooking
          </a>
          <a href="#" className="text-sm/6 font-semibold text-[#f4f1de]">
            Explore Features <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="relative w-full">
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <img
        className="my-8 lg:my-8 w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
        src="https://i.pinimg.com/564x/36/b4/cf/36b4cffcb12862e1d39af36cf0cd9b32.jpg"
        alt="Delicious meal preparation"
        width={1824}
        height={1080}
      />
    </div>
    </div>
  </div>

{/* contentsection */}

    <div className="bg-white py-12 sm:py-32 px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base text-xl font-semibold leading-7 text-[#3d405b]">
            Smart Recipe Management
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#e07a5f] sm:text-4xl">
            Everything you need to plan your meals perfectly
          </p>
          
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* Recipe Matching */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#3d405b]">
                <div className="h-5 w-5 flex-none text-orange-600">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                Smart Recipe Matching
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Find recipes that match what's already in your kitchen. Our smart algorithm 
                  suggests recipes based on your available ingredients.
                </p>
                <p className="mt-6">
                  <a href="#recipes" className="text-sm font-semibold leading-6 text-orange-600">
                    Explore recipes <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            {/* Meal Planning */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#3d405b]">
                <div className="h-5 w-5 flex-none text-orange-600">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                Weekly Meal Planning
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Plan your meals for the entire week with our intuitive drag-and-drop planner. 
                  Get automated shopping lists and prep instructions.
                </p>
                <p className="mt-6">
                  <a href="#planner" className="text-sm font-semibold leading-6 text-orange-600">
                    Start planning <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            {/* Pantry Management */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#3d405b]">
                <div className="h-5 w-5 flex-none text-orange-600">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                Smart Pantry
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Keep track of your ingredients with expiration alerts and automatic 
                  inventory updates when you cook recipes.
                </p>
                <p className="mt-6">
                  <a href="#pantry" className="text-sm font-semibold leading-6 text-orange-600">
                    Manage pantry <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Feature Highlight Section */}
        <div className="mt-32 sm:mt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
  <video
    src="search.mp4"
    alt="Mealify app screenshots showing recipe search and meal planning features"
    className="aspect-[16/9] w-full object-cover rounded-2xl shadow-2xl"
    autoPlay
    loop
    muted
    playsInline
  />
</div>


        {/* Stats Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-[#e07a5f] sm:text-4xl">
              Loved by home cooks everywhere
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Join thousands of happy users who have transformed their cooking experience with Mealify.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '50K+', label: 'Recipes Available' },
              { value: '98%', label: 'Customer Satisfaction' },
              { value: '24/7', label: 'Support' },
            ].map((stat, statIdx) => (
              <div key={statIdx} className="flex flex-col gap-y-3 border-l border-orange-500/10 pl-6">
                <dt className="text-sm leading-6 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-orange-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>



  {/* faqsection */}
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl divide-y divide-[#3d405b]/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-[#e07a5f] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-[#3d405b]/10">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-6">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left text-[#3d405b]"
                >
                  <span className="text-base text-[#3d405b] font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : ''} transition-transform duration-200`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                className={`mt-2 pr-12 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      
      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="text-base font-semibold leading-7 text-orange-600 hover:text-orange-500"
        >
          Still have questions? Contact our support team <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

{/* blogsection */}
<section>
<div className="bg-[#f4f1de] py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#e07a5f] sm:text-5xl">
        From the blog
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">
        Learn how to grow your business with our expert advice.
      </p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            Mar 16, 2020
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Marketing
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-[#e07a5f] group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0" />
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta.
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm/6">
            <p className="font-semibold text-[#e07a5f]">
              <a href="#">
                <span className="absolute inset-0" />
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
        
      </article>
     
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            Mar 16, 2020
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Marketing
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-[#e07a5f] group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0" />
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta.
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm/6">
            <p className="font-semibold text-[#e07a5f]">
              <a href="#">
                <span className="absolute inset-0" />
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
        
      </article>
     
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            Mar 16, 2020
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Marketing
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-[#e07a5f] group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0" />
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta.
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm/6">
            <p className="font-semibold text-[#e07a5f]">
              <a href="#">
                <span className="absolute inset-0" />
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div>
        
      </article>
     
    </div>
  
  </div>
</div>

</section>

</div>
    </div>
  )
}

export default Home