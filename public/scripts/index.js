document.querySelector('#button').addEventListener('click', e => {
    e.preventDefault()

    document.querySelector('#output').innerHTML = ''

    if (document.querySelector('#number').value.length > 0) {
        for (let i = 0; i < 20; i++) {
            const lineEl = document.createElement('p')
    
            const num = i + 1
            const line = document.querySelector('#number').value * num
    
            lineEl.textContent = `${document.querySelector('#number').value} x ${num} = ${line}`
    
            document.querySelector('#output').appendChild(lineEl)
        }
    } else {
        const message = document.createElement('p')

        message.textContent = 'Can you please put in a number in the textbox? Thanks!'

        document.querySelector('#output').appendChild(message)
    }
})