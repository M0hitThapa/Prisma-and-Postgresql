export default function PostJobPage() {
    return(
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl text-gray-700 font-bold mb-6">Post a Job</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Job Title
                    </label>
                    <input type="text" name="title" id="title" required className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    
                </div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                       Company
                    </label>
                    <input type="text" name="company" id="company" required className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    
                </div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input type="text" name="location" id="location" required className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    
                </div>
                <div>
                     <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Job Type
                    </label>
                    <select name="type" id="type" required className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="">Select a type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>

                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" id="description" rows={6} required className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>

                <div>
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                        Salary
                    </label>
                    <input type="text" name="salary" id="salary" placeholder="e.g , 80,000$-90,000$" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                    
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">Post a Job</button>

            </form>
            
        </div>
    )
}