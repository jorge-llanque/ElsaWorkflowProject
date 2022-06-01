using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IAlmacenadorArchivos
    {
        Task<string> GuardarArchivo(byte[] contenido, string extension, string contenedor, string contentType);
        Task<string> EditarArchivo(byte[] contenido, string extension, string contenedor, string ruta, string contentType);
        Task BorrarArchivo(string ruta, string contenedor);
    }
}
