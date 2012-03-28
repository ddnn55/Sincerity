var buffer;

function init(gl)
{
   var myData = new DavidsFloatData([1., 2., 3., 4.]);

   buffer = gl.createBuffer(); // corresponding C function is glGenBuffers(GLsizei n, GLuint *buffers)
   gl.bindBuffer(GL_ARRAY_BUFFER, buffer);
   gl.bufferData(GL_ARRAY_BUFFER, DavidsSizeOf(myData), GL_STATIC_DRAW);
}

function draw(gl)
{
   gl.bindBuffer(GL_ARRAY_BUFFER, buffer);
}

function mouseMoved(e)
{
   // do something
}
