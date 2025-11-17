
y# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:7
My Partner's Key:7

Our initial shared key:7

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|  VSM            |  Hey            | 14  |
|  DE             |  Hi             | 23  |
|  Ammj           |  Cool           | 24  |
|  OJDF           |  Nice           | 1    


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:gli2ju

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
001100111 001101100 001101001 000110010 001101010  001110101 = gli2ju
### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source:Cristiano   
    Destination: Ximena    
    Sequence: 1/3
    Data: 01100111 01101100  
    =========
    Packet 2:

    Source: Cristiano
    Destination: Ximena 
    Sequence: 2/3 
    Data: [binary for char 3] [binary for char 4]
    =========
    Packet 3: 01101001 00110010 

    Source: Cristiano
    Destination: Ximena 
    Sequence: 3/3
    Data: 01101010 01110101
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
Symmetric encryption means you use the same key to lock and unlock the message. Asymmetric encryption means you have two keys  one to lock encrypt and a different one to unlock decrypt. In this simulation, symmetric encryption helped us quickly share secret messages using one shared key. Asymmetric encryption is used for sharing keys safely so only the right person gets the key.

- Why is it important that this protocol uses a new key for each message?
Using a new key for every message is important because it makes it harder for someone to crack the code. If you use the same key over and over, an attacker might figure it out. By changing keys even if one message is hacked the rest stay safe.

- Why is it important that you never share your secret key?
You should never share your secret key because if someone else gets it they can read all your secret messages or even pretend to be you. The secret key is like your password it keeps your messages private.

- In the transport layer, do these messages use TCP or UDP? Why?
These messages probably use TCP. TCP is better for sending messages because it checks that all the packets arrive and are in the right order. UDP is faster but doesn’t check for mistakes, so messages might get lost.

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
In the internet layer packets get an address so they know where to go like writing the address on a letter. In the link layer, the packets are actually sent across wires or wifi going from one computer to another until they reach the destination.


- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?

Someone in the middle still can see who sent the message and who gets it  plus when it was sent and how big it is. They just can’t see what the message actually says.
