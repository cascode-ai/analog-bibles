# Detailed solution - A544

First identify the function inside the dashed box: the first summer forms $x-D$ with $D$ the DAC output, and the second summer with the $z^{-1}$ block in its feedback forms a delaying integrator. A single parasitic-insensitive switched-capacitor integrator can do both, if its input capacitor samples $x$ on one phase and is switched to the DAC level on the other. Then verify the circuit by charge conservation.

### Step 1 — Function of the dashed box

Calling the integrator output $w$ (the quantizer input), the block diagram gives

$$
w(n)=w(n-1)+x(n-1)-D(n-1),\qquad D=\pm0.5V_{REF}=0.5V_{REF}\,y,\ \ y=\pm1,
$$

$$
W(z)=\frac{z^{-1}}{1-z^{-1}}\left[X(z)-D(z)\right].
$$

### Step 2 — Circuit

- **Integrator.** An op amp with its + input grounded and an integrating capacitor $C_2$ from its output (node $w$, which drives the quantizer's + input) to its − input.
- **Sampling capacitor $C_1=C_2$** (unity integrator gain).
  - Left plate: to $x(n)$ through a $\phi_1$ switch; to $+0.5V_{REF}$ through a switch closed during $\phi_2\cdot y$ (when $y=1$); to $-0.5V_{REF}$ through a switch closed during $\phi_2\cdot\bar y$ (when $y=-1$).
  - Right plate: to ground through a $\phi_1$ switch; to the op amp's − input through a $\phi_2$ switch.
- **Quantizer.** The comparator is latched at the end of $\phi_2$ (or the start of $\phi_1$), after $w$ has settled; its decision $y$ selects the DAC level in the next $\phi_2$.

Each plate of $C_1$ is switched only between voltage sources and ground or virtual ground, so the parasitic capacitances on its plates do not transfer charge to $C_2$: the integrator is parasitic-insensitive.

### Step 3 — Charge transfer

At the end of $\phi_1$, $C_1$ holds $x$ on its left plate and 0 V on its right plate, so its right-plate charge is $C_1(0-x)=-C_1x$; the integrator holds. During $\phi_2$ the left plate goes to $V_D=\pm0.5V_{REF}$ and the right plate to the virtual ground, so its charge becomes $C_1(0-V_D)=-C_1V_D$. The difference, $C_1(x-V_D)$, must come from the virtual-ground plate of $C_2$, whose charge is $C_2(0-w)$:

$$
-C_2\,\Delta w=-C_1\left(x-V_D\right)
\;\Longrightarrow\;
w\leftarrow w+\frac{C_1}{C_2}\left(x-V_D\right).
$$

With $C_1=C_2$ this is $w(n)=w(n-1)+x(n-1)-D(n-1)$: non-inverting in $x$, subtracting the DAC level, with the one-period delay between the $\phi_1$ sample and the updated output. Because $y$ is decided after $w$ settles and used in the following $\phi_2$, the DAC term carries the same delay, as in the block diagram.

Equivalent realizations use two separate input capacitors, one non-inverting delaying branch for $x$ and one branch for the reference whose sign is chosen by $y$.
