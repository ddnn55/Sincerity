class GraphicsApp
{
   int bufferID;

   void init()
   {
      float buffer[] = {1., 2., 3., 4.};

      glGenBuffers(1, &bufferID);
      glBindBuffer(GL_ARRAY_BUFFER, bufferID);
      glBufferData(GL_ARRAY_BUFFER, sizeof(float) * 4, buffer, GL_STATIC_DRAW);
   }

   void draw()
   {
      glBindBuffer(GL_ARRAY_BUFFER, bufferID);
   }

   void mouseMoved(MouseEvent e)
   {
      // do something
   }
};
