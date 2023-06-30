using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HospitalManagementSystem.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }
        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public User? users { get; set; }


        [Required(ErrorMessage = "Name Required.")]
        [MinLength(5, ErrorMessage = "Name must be atleast 5 characters long")]
        public string? Name { get; set; }


        [Required(ErrorMessage = "DOB Required")]
        [Column(TypeName = "date")]
        public DateTime? DateOfBirth { get; set; }

        [Required(ErrorMessage = "Contact Required")]
        [Phone(ErrorMessage = "Invalid Phone Number.")]
        public string? PhoneNumber { get; set; }


        [Required(ErrorMessage = "Email Required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string? EmailId { get; set; }

        [Required(ErrorMessage = "Specialization Needed")]
        public string? Specialization { get; set; }

        public int? Experience { get; set; }

        public string? Status { get; set; }

    }
}
