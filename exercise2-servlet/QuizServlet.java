import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class QuizServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int score = 0;

        if ("Database Management System".equals(request.getParameter("question1"))) score++;
        if ("Java Development Kit".equals(request.getParameter("question2"))) score++;
        if ("Hyper Text Markup Language".equals(request.getParameter("question3"))) score++;
        if ("Operating System".equals(request.getParameter("question4"))) score++;
        if ("React".equals(request.getParameter("question5"))) score++;

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
out.println("<html><body style='text-align:center; font-family:Arial; padding-bottom:60px;'>");

out.println("<h2>Quiz Completed!</h2>");
out.println("<h3>Good Job! Your Score: " + score + "/5</h3>");

out.println("<br><button onclick=\"location.href='quiz.html'\">Retake Quiz</button>");

out.println("<footer style='position:fixed; bottom:0; width:100%; background:#333; color:white; padding:10px;'>");
out.println("<p>24071A05E6 (D. Lakshmi Pranavi)</p>");
out.println("</footer>");

out.println("</body></html>");
    }
}