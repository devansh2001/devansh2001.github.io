import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

class Projects extends Component {
    render() {
        return (
            <div id={'Projects'} className={'main'}>
              <h1>Projects</h1>
                <CardDeck className={'my-deck'}>
                    <Card>
                        <Card.Img variant="top" src="https://www.teamdesk.net/blog/wp-content/uploads/2017/11/Inventory-Management-Online-Database-750x410.jpg" />
                        <Card.Body>
                            <Card.Title>Inventory Management System</Card.Title>
                            <Card.Text>
                                This is a JavaFX-based Inventory Management System. Users can add, delete, and modify data.
                                Searching and sorting on different parameters is also possible. Java is used for the
                                operations and GUI, while mySQL used for the backend.
                            </Card.Text>
                            <Button href={'https://github.com/devansh2001/inventory-management-system'}
                                    variant="primary">
                                Access Project
                            </Button>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.lynda.com/course/697705/697705-636924138322611315-16x9.jpg" />
                        <Card.Body>
                            <Card.Title>BitPrice</Card.Title>
                            <Card.Text>
                                BitPrice is a web application that allows its users to track the price of Bitcoin in over
                                160 global currencies. Results update automatically every minute, but users can manually
                                update it if they wish too. They can also see real-time percentage change in cost for all
                                currencies.
                            </Card.Text>
                            <Button href={'https://devansh2001.github.io/BitPrice'} variant="primary" className={'project-button'}>Access Live App</Button>
                            <Button href={'https://github.com/devansh2001/BitPrice'} variant="secondary">Access Project</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://accelerator-origin.kkomando.com/wp-content/uploads/2018/02/file-conversion.jpg" />
                        <Card.Body>
                            <Card.Title>Unit Converter App</Card.Title>
                            <Card.Text>
                                This is an Android Application that can be used to interconvert values from one unit to
                                another for several physical quantities. It uses OOP practices like Liskov-Substitution
                                Principle and Open-Closed Principle.
                            </Card.Text>
                            <Button href={'https://github.com/devansh2001/unit-converter-app'}
                                    variant="primary" className={'project-button'}>
                                Access Project
                            </Button>

                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck className={'my-deck'}>
                    <Card>
                        <Card.Img variant="top" src="https://www.sccpre.cat/mypng/detail/130-1306657_telephone-directory-icon-telephone-directory-phone-book-icon.png"/>
                        <Card.Body>
                            <Card.Title>Telephone Directory System</Card.Title>
                            <Card.Text>
                                This is a Telephone Directory simulator. Users can add records, remove records, or view
                                records. The records can also be sorted or searched upon by various parameters like
                                name, date of birth, etc.
                            </Card.Text>
                            <Button href={'https://github.com/devansh2001/telephone-directory'} variant="primary">
                                Access Project
                            </Button>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/color-books-line-white-background-57455508.jpg" />
                        <Card.Body>
                            <Card.Title>Library Management System</Card.Title>
                            <Card.Text>
                                This is a Library Management System. Users can create accounts, borrow books from stock,
                                return books to stock, and donate extra books to the library. Additionally, users can
                                view the list of books available before borrowing.
                            </Card.Text>
                            <Button href={'https://github.com/devansh2001/library-management-system'}
                                    variant="primary">
                                Access Project
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://startupnation.com/wp-content/uploads/2016/09/Credit-Card.jpg" />
                        <Card.Body>
                            <Card.Title>CatchFraud</Card.Title>
                            <Card.Text>
                                This is a system that uses machine learning to identify fraud in credit card transactions.
                                The model has been trained on data from over 280,000 credit card transactions from a
                                publically accessible database on Kaggle.com
                            </Card.Text>
                            <Button href={'https://github.com/devansh2001/credit-card-fraud-detection-system'}
                                    variant="primary" className={'project-button'}>
                                Access Project
                            </Button>

                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default Projects;