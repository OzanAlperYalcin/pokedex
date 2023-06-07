import { createElement, useEffect, useState } from 'react'

function Types({ as = 'span', children, ...props }) {

    const [data, setData] = useState([])

    useEffect(() => {
        switch (children) {
            case 'grass':
                setData({ color: '#7AC74C', name: 'Çimen' })
                break;
            case 'normal':
                setData({ color: '#7AC74C', name: 'Normal' })
                break;
            case 'ice':
                setData({ color: '#96D9D6', name: 'Buz' })
                break;
            case 'fighting':
                setData({ color: '#C22E28', name: 'Dövüş' })
                break;
            case 'poison':
                setData({ color: '#A33EA1', name: 'Zehir' })
                break;
            case 'ground':
                setData({ color: '#E2BF65', name: 'Zemin' })
                break;
            case 'flying':
                setData({ color: '#A98FF3', name: 'Kanatlı' })
                break;
            case 'psychic':
                setData({ color: '#F95587', name: 'Psişik' })
                break;
            case 'bug':
                setData({ color: '#A6B91A', name: 'Böcek' })
                break;
            case 'rock':
                setData({ color: '#B6A136', name: 'Kaya' })
                break;
            case 'ghost':
                setData({ color: '#735797', name: 'Hayalet' })
                break;
            case 'dragon':
                setData({ color: '#6F35FC', name: 'Ejder' })
                break;
            case 'dark':
                setData({ color: '#705746', name: 'Karanlık' })
                break;
            case 'steel':
                setData({ color: '#B7B7CE', name: 'Çelik' })
                break;
            case 'fairy':
                setData({ color: '#D685AD', name: 'Peri' })
                break;
            case 'fire':
                setData({ color: '#EE8130', name: 'Ateş' })
                break;
            case 'water':
                setData({ color: '#6390F0', name: 'Su' })
                break;
            case 'electric':
                setData({ color: '#F7D02C', name: 'Elektrik' })
                break;
            default:
                break;
        }
    }, [])

    return createElement(as, { ...props, style: { backgroundColor: data.color } }, data.name)
}

export default Types