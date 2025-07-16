import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
function CreateBook(){
    const [form, setForm] = useState({
        title: '',
        genre: '',
        description: '',
        publish_date: '',
        author: '',
        price: '',
        cover_image: '',
        _token: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append('title', form.title);
        data.append('genre', form.genre);
        data.append('description', form.description);
        data.append('publish_date', form.publish_date);
        data.append('author', form.author);
        data.append('price', form.price);
        data.append('cover_image', form.cover_image); // This should be a File object
        data.append('_token', form._token);

        Inertia.post('/books', data);
    }
    return(
        <form onSubmit={handleSubmit} > 
            <h1>Add book</h1>
            <input placeholder='Title' onChange={(e) => setForm({...form, title : e.target.value})}/>
            <input placeholder='Genre' onChange={(e) => setForm({...form, genre : e.target.value})}/>
            <input placeholder='Description' onChange={(e) => setForm({...form, description : e.target.value})}/>
            <input type='date' placeholder='Publish Date' onChange={(e) => setForm({...form, publish_date : e.target.value})}/>
            <input placeholder='Author' onChange={(e) => setForm({...form, author : e.target.value})}/>
            <input placeholder='Price' onChange={(e) => setForm({...form, price : e.target.value})}/>
            <input type='file'
                placeholder='Cover Image'
                onChange={e => setForm({...form, cover_image: e.target.files[0]})}
                />
            <input type="hidden" name="_token" value={form._token} />
            <input type="submit" value="Create Book " />
        </form>
    )
}

export default CreateBook