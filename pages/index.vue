<template>
    <div class="relative w-full h-[80vh] bg-gray-300 bg-cover bg-center flex items-center justify-center">
        <div class="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <div class="text-center text-white space-y-6 max-w-2xl px-4">
                <h1 class="text-4xl md:text-6xl font-bold">Revolutionize Your Waste Management</h1>
                <p class="text-lg md:text-xl">Discover the power of vermicomposting with our premium service.</p>
                <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium">
                    Get Started
                </button>
            </div>
        </div>
    </div>

    <section class="py-20 px-4 md:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h2 class="text-3xl font-bold mb-4">The Benefits of Vermicomposting</h2>
                <p class="text-gray-600 leading-relaxed">
                    Vermicomposting is a sustainable and eco-friendly way to manage your organic waste. It not only
                    reduces
                    the amount of waste going to landfills but also produces a nutrient-rich soil amendment that can be
                    used
                    to enrich your garden or houseplants.
                </p>
                <ul class="mt-6 space-y-4">
                    <li class="flex items-center">
                        
                        <span>Reduces waste and environmental impact</span>
                    </li>
                    <li class="flex items-center">
                        
                        <span>Produces nutrient-rich compost for your plants</span>
                    </li>
                    <li class="flex items-center">
                        
                        <span>Easy to maintain and low-maintenance</span>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="text-3xl font-bold mb-4">How It Works</h2>
                <p class="text-gray-600 leading-relaxed">
                    Our vermicomposting service makes it easy to start composting your organic waste. We provide you
                    with a
                    high-quality worm bin and all the necessary supplies, and our team of experts will guide you through
                    the
                    process.
                </p>
                <div class="mt-6 space-y-4">
                    <div class="flex items-start">
                        
                        <div>
                            <h3 class="text-lg font-medium">Delivery and Setup</h3>
                            <p class="text-gray-600">We deliver your worm bin and set it up for you.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        
                        <div>
                            <h3 class="text-lg font-medium">Worm Care</h3>
                            <p class="text-gray-600">Our team will provide guidance on caring for your worms.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        
                        <div>
                            <h3 class="text-lg font-medium">Nutrient-Rich Compost</h3>
                            <p class="text-gray-600">Enjoy the benefits of high-quality vermicompost for your plants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-20 px-4 md:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div class="Card border border-gray-300 rounded-lg">
                    <div class="CardContent flex flex-col items-center justify-center p-8">
                        <img alt="Vermicompost" class="mb-4 rounded-lg" height="300" src="https://placehold.co/400"
                            style="aspect-ratio: 1 / 1; object-fit: cover;" width="300">
                        <h3 class="text-2xl font-bold mb-2">Vermicompost</h3>
                        <p class="text-gray-600 mb-4">Our premium vermicompost is rich in nutrients and perfect for
                            nourishing your plants.</p>
                        <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">Learn
                            More</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-bold mb-4">Why Choose Our Vermicomposting Service?</h2>
                <p class="text-gray-600 leading-relaxed">Our vermicomposting service is designed to make it easy for you
                    to start composting your organic waste. We provide you with everything you need, and our team of
                    experts will guide you through the process every step of the way.</p>
                <ul class="mt-6 space-y-4">
                    <li class="flex items-center">
                        
                        <span>High-quality worm bin and supplies</span>
                    </li>
                    <li class="flex items-center">
                        
                        <span>Expert guidance and support</span>
                    </li>
                    <li class="flex items-center">
                        
                        <span>Convenient delivery and setup</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="py-20 px-4 md:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div class="grid gap-4">
                <h2 class="text-3xl font-bold">Image Gallery</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <img v-for="i in 6" alt="Image 1" class="rounded-lg" height="300" src="https://placehold.co/400"
                        style="aspect-ratio: 1 / 1; object-fit: cover;" width="300" />
                    
                </div>
            </div>
            <div class="grid gap-4">
                <h2 class="text-3xl font-bold">Contact Us</h2>
                <div class="space-y-4">
                    <p>Get in touch with us for more information about our vermicomposting service.</p>
                    <div class="flex items-center gap-2">
                        
                        <span>+1 (123) 456-7890</span>
                    </div>
                    <div class="flex items-center gap-2">
                        
                        <span>info@acme.com</span>
                    </div>
                    <div class="flex items-center gap-2">
                        
                        <span>123 Main St, Anytown USA</span>
                    </div>
                    <div class="flex items-center gap-2">
                        
                        <span>www.acme.com</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
<footer class="bg-gray-900 text-white py-8">
    <div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-2xl font-bold mb-4">About Us</h3>
            <p class="text-gray-400 leading-relaxed">
                Acme is a leading provider of vermicomposting services, helping individuals and businesses reduce their
                environmental impact and nourish their plants with high-quality compost.
            </p>
        </div>
        <div>
            <h3 class="text-2xl font-bold mb-4">Follow Us</h3>
            <div class="flex items-center gap-4">
                <a href="#" class="text-gray-400 hover:text-white">
                    
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                    
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                    
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                    
                </a>
            </div>
        </div>
    </div>
    <div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 mt-8 text-center text-gray-400">
        © 2024 Acme. All rights reserved.
    </div>
</footer>
<div class="fixed bottom-4 right-4">
    <nuxt-link to="#" class="bg-green-500 hover:bg-green-600 text-white p-6 rounded-full shadow-lg transition-colors flex items-center justify-center">
        
        <span class="sr-only">WhatsApp</span>
    </nuxt-link>
</div>



</template>