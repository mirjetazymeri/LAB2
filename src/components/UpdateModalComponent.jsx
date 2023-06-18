import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import PostServices from '../services/postServices';
import 'bootstrap/dist/css/bootstrap.css';


function UpdateModalComponent(props) {
    const [isShow, invokeModal] = useState(false);

    const initModal = () => { 
        return invokeModal(!isShow);
    }

    //form updation data
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [countInStock, setCount] = useState(props.countInStock);
    const [brand, setBrand] = useState(props.brand);
    const [id, setId] = useState(props.id);
    const [selectedFile, setSelectedFile] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('id', id);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('countInStock', countInStock);
        formData.append('brand', brand);

        if(selectedFile != '' && selectedFile.length != 0){
            formData.append('image', selectedFile);
        }

        const response = await PostServices.update(formData);
        if(response.data.success == true) {
            alert(response.data.msg);
        }
        else {
            alert(response.data.msg);
        }
    }
 
    return(
        <>
            <Button variant='success' onClick={initModal}>
                Edit
            </Button>
            <Modal show={isShow}>
                <Modal.Header>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input type='text'
                                name='title'
                                placeholder='Enter post title'
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                required
                        />
                        <br /><br />
                        <input type='text'
                                name='description'
                                placeholder='Enter description'
                                value={description}
                                onChange={event => setDescription(event.target.value)}
                                required
                        />
                        <br /><br />
                        <input type='text'
                                name='price'
                                placeholder='Enter price'
                                value={price}
                                onChange={event => setPrice(event.target.value)}
                                required
                        />
                        <br /><br />
                        <input type='text'
                                name='countInStock'
                                placeholder='Enter stock'
                                value={countInStock}
                                onChange={event => setCount(event.target.value)}
                                required
                        />
                        <br /><br />
                        <input type='text'
                                name='brand'
                                placeholder='Enter brand'
                                value={brand}
                                onChange={event => setBrand(event.target.value)}
                                required
                        />
                        <br /><br />
                        <input type='file'
                                name='file'
                                onChange={event => setSelectedFile(event.target.files[0])}
                        />
                        <br /><br />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={initModal}>
                            Close
                        </Button>
                        <Button type='submit' variant='dark' >
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default UpdateModalComponent;