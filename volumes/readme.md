- create an instance of a 'volume' using a third party volume system

- you can then attach that 'volume' in a container, allowing you to read and write from the volume in app
- (detached on pod delete)

- this is great for persistent state storage in a cloud app, instead of using a db