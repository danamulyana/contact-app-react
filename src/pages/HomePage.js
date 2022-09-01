import React from "react";
import ContactList from "../components/ContactList";
import { getContacts, deleteContact } from '../utils/api';
import SearchBar from "../components/SearchBar";
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper(){
    const [SearchParams, setSearchParams] = useSearchParams();

    const keyword = SearchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            contacts: [],
            keyword: props.defaultKeyword || "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount(){
        const { data } = await getContacts();

        this.setState(() => {
            return {
                contacts: data
            }
        })
    }

    async onDeleteHandler(id){
        await deleteContact(id);

        const { data } = await getContacts();
        this.setState(() => {
            return {
                contacts: data,
            }
        });
    }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return{
                keyword,
            }
        })

        this.props.keywordChange(keyword);
    }

    render(){
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLocaleLowerCase().includes(
                this.state.keyword.toLocaleLowerCase()
            );
        });

        return(
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Kontak</h2>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}


export default HomePageWrapper;