import React, { useState } from 'react';

const AddItems = () => {
    const [addItems, setAddItems] = useState([])

    const handleAddItems = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.details.value;
        const img = form.url.value;


        const postAddItems = {
            title,
             price, 
            description,
            img 
        }

        fetch('https://food-review-server-three.vercel.app/additem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postAddItems),

        })
        .then(res => res.json())
        .then(data =>{
            setAddItems(data)
            if(data.acknowledged){
                alert('Service added ')
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
             <h1 className='text-5xl mt-28 mb-5 text-center text-orange-700' style={{ fontFamily: 'Playfair Display',   }}>Add Your Poducts</h1>

             <form onSubmit={handleAddItems} className="card-body">
                        <div className="form-control">
                           
                            <input type="text" name='title' placeholder="title" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required/>
                           
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name='details' placeholder="Description" className="input input-bordered"required />
                           
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name='url' placeholder="Image URL" className="input input-bordered" required/>
                           
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-500" type="submit" value="add service" />

                        </div>
                    </form>
        </div>
    );
};

export default AddItems;