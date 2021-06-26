<template>
    <div>
        <Header/>
        <div class="mb-3">
            <div class="banner relative w-full bg-dark d-flex items-center opacity-100">
            <div class="aboslute flex items-center top-0 w-full h-full bg-black bg-opacity-80 bottom-0">
            <div class="text-center  hero text-light mx-auto py-20 space-y-3 animate-fade-in-down">
                <p class="text-xl sm:text-3xl  font-bold text-white">Meet The Team</p>
            </div>
            </div>
        </div> 
            <div class="w-10/12 mx-auto mb-8 flex flex-col sm:flex-row flex-shrink-0 flex-wrap jusify-center justify-between">
                <div class="w-11/12 sm:w-3/12 mx-8 items-center justify-center text-center">
                        <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal1 =!toggleModal1">
                            <figure class="h-32 w-32 my-5 mx-auto text-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                    <title>Ahmed Tijjani Modibbo</title>
                                    <desc>This is an image description</desc>
                                    <defs>
                                    <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                        <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                    </clipPath>
                                    <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                        <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                    </clipPath>
                                    </defs>
                                    <!-- Background image -->
                                    <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                    <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                    <!-- Foreground image -->
                                    <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-1-removebg-preview.png" />
                                    </g>
                                </svg>
                                </figure>
                        </button>
                        <div v-if="toggleModal1" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal1 =!toggleModal1" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"> Ahmed Tijjani Modibbo</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full mx-auto justify-center">
                            <p class="text-lg text-lilac-light font-semibold">Ahmed Tijjani Modibbo</p>
                            <p class="font-light text-sm">Founder/CEO</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
                <div class="w-11/12 sm:w-3/12 mx-4 items-center justify-center text-center">
                    <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal2 =!toggleModal2">
                        <figure class="h-32 w-32  my-5 mx-auto text-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                <title>Mary Nguveren Igbazua</title>
                                <desc>This is an image description</desc>
                                <defs>
                                <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                    <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                </clipPath>
                                <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                    <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                </clipPath>
                                </defs>
                                <!-- Background image -->
                                <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                <!-- Foreground image -->
                                <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-2-removebg-preview.png" />
                                </g>
                            </svg>
                        </figure>
                    </button>
                        <div v-if="toggleModal2" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal2 =!toggleModal2" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"> Mary Nguveren Igbazua</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg text-lilac-light font-semibold">Mary Nguveren Igbazua</p>
                            <p class="font-light text-sm">Co-Founder/Head of Innovation</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
                <div class="w-11/12 sm:w-3/12 mx-4 items-center justify-center text-center">
                        <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal3 =!toggleModal3">
                        <figure class="h-32 w-32 my-5 mx-auto text-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                <title>Radeno Randy Haniel</title>
                                <desc>This is an image description</desc>
                                <defs>
                                <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                    <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                </clipPath>
                                <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                    <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                </clipPath>
                                </defs>
                                <!-- Background image -->
                                <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                <!-- Foreground image -->
                                <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-4-removebg-preview.png" />
                                </g>
                            </svg>
                        </figure>
                        </button>
                            <div v-if="toggleModal3" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal3 =!toggleModal3" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"> Radeno Randy Haniel</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg text-lilac-light font-semibold">Radeno Randy Haniel</p>
                            <p class="font-light text-sm">Media & Communications Manager</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
                <div class="w-11/12 sm:w-3/12 mx-4 items-center justify-center text-center">
                        <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal4 =!toggleModal4">
                            <figure class="h-32 w-32 my-5 mx-auto text-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                    <title>Sesugh Angeer</title>
                                    <desc>This is an image description</desc>
                                    <defs>
                                    <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                        <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                    </clipPath>
                                    <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                        <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                    </clipPath>
                                    </defs>
                                    <!-- Background image -->
                                    <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                    <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                    <!-- Foreground image -->
                                    <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-5-removebg-preview.png" />
                                    </g>
                                </svg>
                            </figure>
                        </button>
                        <div v-if="toggleModal4" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal4 =!toggleModal4" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"> Sesugh Angeer</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg text-lilac-light font-semibold">Sesugh Angeer</p>
                            <p class="font-light text-sm">Head of Programmes</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
                <div class="w-11/12 sm:w-3/12 mx-4 items-center justify-center text-center">
                        <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal5 =!toggleModal5">
                            <figure class="h-32 w-32 my-5 mx-auto text-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                    <title>Sadiya Halidu</title>
                                    <desc>This is an image description</desc>
                                    <defs>
                                    <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                        <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                    </clipPath>
                                    <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                        <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                    </clipPath>
                                    </defs>
                                    <!-- Background image -->
                                    <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                    <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                    <!-- Foreground image -->
                                    <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-9-removebg-preview.png" />
                                    </g>
                                </svg>
                            </figure>
                        </button>
                        <div v-if="toggleModal5" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal5 =!toggleModal5" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"> Sadiya Halidu</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg text-lilac-light font-semibold">Sadiya Halidu</p>
                            <p class="font-light text-sm">Resource Officer</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
                <div class="w-11/12 sm:w-3/12 mx-4 items-center justify-center text-center">
                        <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal6 =!toggleModal6">
                            <figure class="h-32 w-32 my-5 mx-auto text-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                    <title>Zion Iliya</title>
                                    <desc>This is an image description</desc>
                                    <defs>
                                    <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                        <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                    </clipPath>
                                    <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                        <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                    </clipPath>
                                    </defs>
                                    <!-- Background image -->
                                    <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                    <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                    <!-- Foreground image -->
                                    <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-10-removebg-preview.png" />
                                    </g>
                                </svg>
                            </figure>
                        </button>
                            <div v-if="toggleModal6" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal6 =!toggleModal6" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center">Zion Iliya</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg text-lilac-light font-semibold">Zion Iliya</p>
                            <p class="font-light text-sm">Facility Manager</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
                <div class="w-11/12 sm:w-3/12 mx-4 items-center justify-center text-center">
                        <button class="w-full flex mx-auto items-center focus:outline-none" @click ="toggleModal7 =!toggleModal7">
                             <figure class="h-32 w-32 my-5 mx-auto text-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 100 120" class="image" aria-hidden="true">
                                    <title>Abiodun Ogunjimi</title>
                                    <desc>This is an image description</desc>
                                    <defs>
                                    <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
                                        <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
                                    </clipPath>
                                    <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
                                        <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
                                    </clipPath>
                                    </defs>
                                    <!-- Background image -->
                                    <g clip-path="url(#maskImage)" transform="translate(0 -7)">
                                    <image clip-path="url(#maskBackground)" width="120" height="120" x="70" y="38" href="../assets/meetTeam/background.png" transform="translate(-90 -31)" />
                                    <!-- Foreground image -->
                                    <image x="-15" y="0" fill="none" class="h-32 w-32 image__foreground" href="../assets/meetTeam/team-6-removebg-preview.png" />
                                    </g>
                                </svg>
                             </figure>
                        </button>
                        <div v-if="toggleModal7" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                            <div class="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                            <div class="p-6 pt-3 bg-white rounded-lg shadow-xl">
                                <button class="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" @click ="toggleModal7 =!toggleModal7" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <div>
                                    <p class="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"> Abiodun Ogunjimi</p>
                                    <p class="font-normal text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis a maxime accusantium veritatis, molestias, quibusdam eveniet incidunt quidem saepe iure necessitatibus omnis perspiciatis quis est maiores consequuntur facilis beatae.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg text-lilac-light font-semibold">Abiodun Ogunjimi</p>
                            <p class="font-light text-sm">Finance Officer</p>
                            <div class="flex w-36 mx-auto mt-3 text-gray-500 justify-between items-center">
                                <a href="#">
                                    <svg class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#">
                                    <svg  class="stroke-current text-gray-500 hover:text-lilac-light py-0.5 hover:border-lilac-light border border-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" class="">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="#">
                                    <svg class="fill-current text-gray-500 hover:text-lilac-light py-1 hover:border-lilac-light border border-gray-500 rounded-full hover:text-lilac-light"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
 components: {
    Header,
    Footer
  },
  data(){
    return {
      toggleModal1: false,
      toggleModal2: false,
      toggleModal3: false,
      toggleModal4: false,
      toggleModal5: false,
      toggleModal6: false,
      toggleModal7: false,
      }
    },
}
</script>

<style>

 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap');
 .banner {
  height: 300px;
  background-image: url("../assets/background/background1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
p.sub-heading{
    max-width: 700px;
    margin: 0 auto;
}
.thumbnail {
  min-height: 120px;
  height: max-content;
}
.topic{
  font-family: 'Josefin Sans', sans-serif;
}
.image {
  transform: scale(0.9, 0.9);
  transition: transform 0.2s ease-in;
}

.image__foreground {
  transform-origin: 50% 50%;
  transform: translateY(4px) scale(1, 1);
  transition: transform 0.2s ease-in;
}

.image:hover {
  transform: scale(1, 1);
}

.image:hover .image__foreground {
  transform: translateY(-7px) scale(1.05, 1.05);
}

@media (prefers-reduced-motion) {
  .image {
    display: none;
  }
}
</style>