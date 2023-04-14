export interface IGlobalRes {
    succeed: boolean
    metas: []
}

export interface ITable {
    current_page: 1,
    data: [],
    first_page_url: "http://id.werify.net/api/v1/user/profile/financial-information?page=1",
    from: null,
    last_page: 1,
    last_page_url: "http://id.werify.net/api/v1/user/profile/financial-information?page=1",
    links: [
        {
            url: null,
            label: "&laquo; Previous",
            active: false
        },
        {
            url: "http://id.werify.net/api/v1/user/profile/financial-information?page=1",
            label: "1",
            active: true
        },
        {
            url: null,
            label: "Next &raquo;",
            active: false
        }
    ],
    next_page_url: null,
    path: "http://id.werify.net/api/v1/user/profile/financial-information",
    per_page: 15,
    prev_page_url: null,
    to: null,
    total: 0
}