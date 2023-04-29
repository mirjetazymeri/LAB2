using WebApplication1.Data;
using WebApplication1.Repository.IRepository;

namespace WebApplication1.Repository
{
    public class UnitOfWork:IUnitOfWork
    {
        private ApplicationDbContext _db;
        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
        }

        public void Save()
        {
            _db.SaveChanges(); 
        }
    }
}
