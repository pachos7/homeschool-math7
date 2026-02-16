#!/bin/bash

# Part 1: Weeks 1.3 to 1.7
for i in {3..7}; do
cat > "weeks/week-1-$i.html" << WEEK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 1.$i - Math 7th Grade Curriculum</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Week 1.$i</h1>
            <p><a href="../part1.html">← Back to Part I: Remembering Math Skills</a></p>
        </div>
    </header>

    <main>
        <div class="container">
            <section class="content-section">
                <h2>Objective</h2>
                <p>[Add learning objectives here]</p>
            </section>

            <section class="content-section">
                <h2>Tools</h2>
                <p>[Add helpful tools and resources here]</p>
            </section>

            <section class="content-section">
                <h2>Content</h2>
                <p>[Add lesson content, videos, and practice materials here]</p>
            </section>

            <section class="content-section">
                <h2>Challenges</h2>
                <p>[Add challenges and questions here]</p>
            </section>

            <nav class="week-nav">
                <a href="week-1-$((i-1)).html">← Previous Week: 1.$((i-1))</a>
                $([ $i -eq 7 ] && echo '<a href="week-2-1.html">Next Week: 2.1 →</a>' || echo "<a href=\"week-1-$((i+1)).html\">Next Week: 1.$((i+1)) →</a>")
            </nav>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>Designed in 2025 by:</p>
            <p>Ilona Arias - Student<br>
            Manuel Nino - Student<br>
            Francisco Nino - Instructor</p>
        </div>
    </footer>
</body>
</html>
WEEK
done

# Part 2: Weeks 2.1 to 2.7
for i in {1..7}; do
cat > "weeks/week-2-$i.html" << WEEK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 2.$i - Math 7th Grade Curriculum</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Week 2.$i</h1>
            <p><a href="../part2.html">← Back to Part II: Global Economics and Investment</a></p>
        </div>
    </header>

    <main>
        <div class="container">
            <section class="content-section">
                <h2>Objective</h2>
                <p>[Add learning objectives here]</p>
            </section>

            <section class="content-section">
                <h2>Tools</h2>
                <p>[Add helpful tools and resources here]</p>
            </section>

            <section class="content-section">
                <h2>Content</h2>
                <p>[Add lesson content, videos, and practice materials here]</p>
            </section>

            <section class="content-section">
                <h2>Challenges</h2>
                <p>[Add challenges and questions here]</p>
            </section>

            <nav class="week-nav">
                $([ $i -eq 1 ] && echo '<a href="week-1-7.html">← Previous Week: 1.7</a>' || echo "<a href=\"week-2-$((i-1)).html\">← Previous Week: 2.$((i-1))</a>")
                $([ $i -eq 7 ] && echo '<a href="week-3-1.html">Next Week: 3.1 →</a>' || echo "<a href=\"week-2-$((i+1)).html\">Next Week: 2.$((i+1)) →</a>")
            </nav>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>Designed in 2025 by:</p>
            <p>Ilona Arias - Student<br>
            Manuel Nino - Student<br>
            Francisco Nino - Instructor</p>
        </div>
    </footer>
</body>
</html>
WEEK
done

# Part 3: Weeks 3.1 to 3.8
for i in {1..8}; do
cat > "weeks/week-3-$i.html" << WEEK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 3.$i - Math 7th Grade Curriculum</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Week 3.$i</h1>
            <p><a href="../part3.html">← Back to Part III: Algebra and Geometry Foundations</a></p>
        </div>
    </header>

    <main>
        <div class="container">
            <section class="content-section">
                <h2>Objective</h2>
                <p>[Add learning objectives here]</p>
            </section>

            <section class="content-section">
                <h2>Tools</h2>
                <p>[Add helpful tools and resources here]</p>
            </section>

            <section class="content-section">
                <h2>Content</h2>
                <p>[Add lesson content, videos, and practice materials here]</p>
            </section>

            <section class="content-section">
                <h2>Challenges</h2>
                <p>[Add challenges and questions here]</p>
            </section>

            <nav class="week-nav">
                $([ $i -eq 1 ] && echo '<a href="week-2-7.html">← Previous Week: 2.7</a>' || echo "<a href=\"week-3-$((i-1)).html\">← Previous Week: 3.$((i-1))</a>")
                $([ $i -eq 8 ] && echo '<a href="week-4-1.html">Next Week: 4.1 →</a>' || echo "<a href=\"week-3-$((i+1)).html\">Next Week: 3.$((i+1)) →</a>")
            </nav>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>Designed in 2025 by:</p>
            <p>Ilona Arias - Student<br>
            Manuel Nino - Student<br>
            Francisco Nino - Instructor</p>
        </div>
    </footer>
</body>
</html>
WEEK
done

# Part 4: Weeks 4.1 to 4.7
for i in {1..7}; do
cat > "weeks/week-4-$i.html" << WEEK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 4.$i - Math 7th Grade Curriculum</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Week 4.$i</h1>
            <p><a href="../part4.html">← Back to Part IV: Mathematical Change and Function Concepts</a></p>
        </div>
    </header>

    <main>
        <div class="container">
            <section class="content-section">
                <h2>Objective</h2>
                <p>[Add learning objectives here]</p>
            </section>

            <section class="content-section">
                <h2>Tools</h2>
                <p>[Add helpful tools and resources here]</p>
            </section>

            <section class="content-section">
                <h2>Content</h2>
                <p>[Add lesson content, videos, and practice materials here]</p>
            </section>

            <section class="content-section">
                <h2>Challenges</h2>
                <p>[Add challenges and questions here]</p>
            </section>

            <nav class="week-nav">
                $([ $i -eq 1 ] && echo '<a href="week-3-8.html">← Previous Week: 3.8</a>' || echo "<a href=\"week-4-$((i-1)).html\">← Previous Week: 4.$((i-1))</a>")
                $([ $i -eq 7 ] && echo '<a href="week-5-1.html">Next Week: 5.1 →</a>' || echo "<a href=\"week-4-$((i+1)).html\">Next Week: 4.$((i+1)) →</a>")
            </nav>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>Designed in 2025 by:</p>
            <p>Ilona Arias - Student<br>
            Manuel Nino - Student<br>
            Francisco Nino - Instructor</p>
        </div>
    </footer>
</body>
</html>
WEEK
done

# Part 5: Weeks 5.1 to 5.7
for i in {1..7}; do
cat > "weeks/week-5-$i.html" << WEEK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 5.$i - Math 7th Grade Curriculum</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Week 5.$i</h1>
            <p><a href="../part5.html">← Back to Part V: Introduction to Physical and Chemical Science</a></p>
        </div>
    </header>

    <main>
        <div class="container">
            <section class="content-section">
                <h2>Objective</h2>
                <p>[Add learning objectives here]</p>
            </section>

            <section class="content-section">
                <h2>Tools</h2>
                <p>[Add helpful tools and resources here]</p>
            </section>

            <section class="content-section">
                <h2>Content</h2>
                <p>[Add lesson content, videos, and practice materials here]</p>
            </section>

            <section class="content-section">
                <h2>Challenges</h2>
                <p>[Add challenges and questions here]</p>
            </section>

            <nav class="week-nav">
                $([ $i -eq 1 ] && echo '<a href="week-4-7.html">← Previous Week: 4.7</a>' || echo "<a href=\"week-5-$((i-1)).html\">← Previous Week: 5.$((i-1))</a>")
                $([ $i -eq 7 ] && echo '<a href="../index.html">Back to Curriculum Overview</a>' || echo "<a href=\"week-5-$((i+1)).html\">Next Week: 5.$((i+1)) →</a>")
            </nav>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>Designed in 2025 by:</p>
            <p>Ilona Arias - Student<br>
            Manuel Nino - Student<br>
            Francisco Nino - Instructor</p>
        </div>
    </footer>
</body>
</html>
WEEK
done

echo "Generated all remaining week pages (1.3-1.7, 2.1-2.7, 3.1-3.8, 4.1-4.7, 5.1-5.7)"
