import React from 'react';

const AddContactForm = () => {
    return (
        <div>
            <form>
                <div>
                    {' '}
                    name: <input />
                </div>
                <div>
                    {' '}
                    address: <input />
                </div>
                <div>
                    {' '}
                    phone: <input />
                </div>
                <div>
                    {' '}
                    email:
                    <input />
                </div>
                <div>
                    {' '}
                    image: <input />
                </div>

                <button>add </button>
            </form>
        </div>
    );
};

export default AddContactForm;
