# Detailed solution - A241

Replace the op amp's input port by a null port: zero voltage between the + and − inputs, and zero current into either input. These two conditions fix the voltage at the $R_1$–$R_2$ junction and the current through both resistors, which gives the output directly.

### Step 1 — Zero input voltage

The + input is driven by $v_{in}$. Because the voltage across the null port is zero, the − input, which is the junction of $R_1$ and $R_2$, also sits at

$$
v_-=v_+=v_{in}.
$$

### Step 2 — Zero input current

$R_1$ runs from this junction to ground, so it carries $v_{in}/R_1$. No current enters the − input, so the whole of it must come from the output through $R_2$:

$$
i_{R_2}=i_{R_1}=\frac{v_{in}}{R_1}.
$$

### Step 3 — Output voltage

The output is the junction voltage plus the drop across $R_2$:

$$
v_{out}=v_{in}+R_2\frac{v_{in}}{R_1}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=1+\frac{R_2}{R_1}.
$$

The result does not depend on the op-amp gain; it holds as long as the gain is large enough for the null-port idealization to apply. Equivalently, $R_1$ and $R_2$ form a divider that feeds back $v_{out}R_1/(R_1+R_2)$, and the null port forces this to equal $v_{in}$.
