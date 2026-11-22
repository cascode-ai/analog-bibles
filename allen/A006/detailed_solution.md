# Detailed solution - A006

The dependent source $r_mi$ ties node B (between $R_2$ and $R_3$) to a fixed voltage relative to ground. Moving it through node B into the two resistor branches separates the circuit into an input part, where the source becomes a resistor, and an output part driven directly by the source. Then a current divider and Ohm's law give the gain without simultaneous equations.

### Step 1 — Node voltage set by the dependent source

The source has its − terminal at node B and its + terminal at ground, so

$$
v_B=-r_mi ,
$$

whatever the rest of the circuit does. Call the top-left node A; its voltage is $v_1$, across $R_1$.

### Step 2 — Source rearrangement

Move the source through node B into series with each of the other branches at that node, $R_2$ and $R_3$, and replace its original branch by a short circuit, which ties B to ground. Each moved copy keeps the same value and orientation, so the far end of each resistor is still at $-r_mi$: the circuit outside node B sees exactly the same voltages.

<!-- diagram: diagram-01.cir -->

After the move, the input side is $i_{in}$ driving $R_1$ in parallel with the series branch $R_2$ + source (node A to ground). The output side is $R_3$ in series with its own copy of the source, connected between ground and ground: a closed loop that draws nothing from the input side.

### Step 3 — Source substitution in the $R_2$ branch

The copy of $r_mi$ in the $R_2$ branch carries exactly the current $i$ that controls it. Following $i$ from node A to ground, the voltage drop across the branch is

$$
v_1=iR_2+(0-v_{B2})=iR_2-r_mi=(R_2-r_m)\,i ,
$$

where $v_{B2}=-r_mi$ is the voltage at the junction of $R_2$ and the source. A voltage proportional to its own current is a resistor, so the source is equivalent to a resistance $-r_m$, and the branch to $R_2-r_m$.

### Step 4 — Chain calculation

The input current divides between $R_1$ and the equivalent branch $R_2-r_m$:

$$
i=i_{in}\,\frac{R_1}{R_1+R_2-r_m}.
$$

In the output loop the ideal source places $-r_mi$ across $R_3$, so with $i_{out}$ flowing down through $R_3$,

$$
i_{out}=\frac{v_B}{R_3}=-\frac{r_m}{R_3}\,i .
$$

Chaining the two:

$$
\frac{i_{out}}{i_{in}}=-\frac{r_mR_1}{R_3(R_1+R_2-r_m)}.
$$

A direct KCL check at node A confirms it: $v_1=iR_2+v_B=(R_2-r_m)i$ and $i_{in}=v_1/R_1+i$, which reproduce the divider expression. $R_3$ does not affect $i$, because the ideal source fixes $v_B$ regardless of the current $R_3$ draws. The result requires $R_1+R_2\ne r_m$; at $r_m=R_1+R_2$ the loop $R_1$–$R_2$–source has zero net resistance and the gain is unbounded.
