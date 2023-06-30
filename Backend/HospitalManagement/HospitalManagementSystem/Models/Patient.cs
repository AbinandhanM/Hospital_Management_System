using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HospitalManagementSystem.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }
        [ForeignKey("PatientId")]
        public User? Users { get; set; }



        [Required(ErrorMessage = "Name Required.")]
        [MinLength(5, ErrorMessage = "Name must be atleast 5 characters long")]
        public string? Name { get; set; }


        [Required(ErrorMessage = "DOB Required")]
        [Column(TypeName = "date")]
        public DateTime? DateOfBirth { get; set; }

        [Required(ErrorMessage = "Contact Required")]
        [Phone(ErrorMessage = "Invalid Phone Number.")]
        public string? PhoneNumber { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        public string? Gender { get; set; }

        public string? BloodGroup { get; set; }

        [Required(ErrorMessage = "Email Required")]
        [EmailAddress(ErrorMessage = "Invalid Address")]
        public string? EmailId { get; set; }


       
        public string? Address { get; set; }

    }
}
