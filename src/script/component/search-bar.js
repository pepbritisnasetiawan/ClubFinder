class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    /* agar mudah mendapatkan niali value dari element input di searchbar,
    kita buat fungsi getter yang mengembalikan nilai value dari element input.
    nilai value ini akan di manfaatkan pada berkas main.js untuk mendapatkan
    kata kunci pencarian club.
    */

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML =`
            <div id="search-container" class="search-container">
                <input placeholder="Search football club" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `;

        // event handler untuk element button
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);