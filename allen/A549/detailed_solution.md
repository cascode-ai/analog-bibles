# Detailed solution - A549

Treat the diagram as a linear signal-flow graph: name the delay output, express every node in terms of it, close the loop through the output summer and solve for $Y$. Superposition gives $Y/Q$ with $X=0$.

### Step 1 — Signals fed back from the delay

Let $D=z^{-1}Y$ be the output of the $z^{-1}$ block. As drawn, $D$ is used three times:
- through the −1 gain into the left integrator $1/(1-z^{-1})$;
- through the same −1 gain into the lower (+) input of the first summer;
- directly into the lower (+) input of the summer that adds $X$.

The first summer therefore outputs

$$
-\frac{D}{1-z^{-1}}-D=-D\,\frac{1+(1-z^{-1})}{1-z^{-1}}=-D\,\frac{2-z^{-1}}{1-z^{-1}} ,
$$

and the second integrator produces

$$
C=-D\,\frac{2-z^{-1}}{(1-z^{-1})^2}.
$$

### Step 2 — Close the loop at the output

The two output summers give $Y=C+X+D+Q$. Substituting $C$ and $D=z^{-1}Y$:

$$
Y\left[1-z^{-1}+\frac{z^{-1}(2-z^{-1})}{(1-z^{-1})^2}\right]=X+Q .
$$

Over the common denominator, the numerator of the bracket is

$$
(1-z^{-1})^3+z^{-1}(2-z^{-1})
=1-3z^{-1}+3z^{-2}-z^{-3}+2z^{-1}-z^{-2}
=1-z^{-1}+2z^{-2}-z^{-3}.
$$

### Step 3 — Noise transfer function

With $X=0$,

$$
\frac{Y(z)}{Q(z)}=\frac{(1-z^{-1})^2}{1-z^{-1}+2z^{-2}-z^{-3}}
=\frac{z(z-1)^2}{z^3-z^2+2z-1}.
$$

$X$ enters at the same place as $Q$ (after the loop filter), so $Y/X$ is the same expression. The double zero at $z=1$ shapes the noise as $(1-z^{-1})^2$ near dc, as a second-order modulator should.

### Step 4 — Poles and stability

The roots of $z^3-z^2+2z-1=0$ are

$$
z=0.570,\qquad z=0.215\pm j1.307\quad(|z|=1.325).
$$

The complex pair lies outside the unit circle, so the loop as drawn is unstable. A step-by-step iteration of the diagram with a unit impulse in $Q$ gives $y[n]=1,-1,-2,1,4,0,-7,-3,11,10,-15,-24,\dots$, identical to the impulse response of the expression above and visibly growing.

The direct path from the delay output into the $X$ summer is what spoils the result. Without it, $Y=C+X+Q$ and the bracket numerator becomes $(1-z^{-1})^2+z^{-1}(2-z^{-1})=1$, so $Y/Q=(1-z^{-1})^2$: the standard, stable second-order noise shaping with both poles at $z=0$.
