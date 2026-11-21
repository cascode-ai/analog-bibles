# Detailed solution - G420

The Miller current through $C_{gd1}$ is large because the drain of $M_1$ swings $a_{dm1}$ times the gate voltage in the opposite direction. In a fully differential stage the drain of $M_2$ swings by the same amount in the other direction, so a capacitor from the gate of $M_1$ to the drain of $M_2$ injects an equal and opposite current. Write the DM input capacitance with both capacitors and choose $C_n$ to cancel the Miller term.

### Step 1 — Connection

Cross-couple the two capacitors:
- one $C_n$ from the gate of $M_1$ ($V_{i1}$) to the drain of $M_2$;
- one $C_n$ from the gate of $M_2$ ($V_{i2}$) to the drain of $M_1$.

The circuit stays symmetric, so the DM and CM half-circuit analysis still applies.

### Step 2 — DM input capacitance with $C_n$

For a DM input, $v_{i2}=-v_{i1}$, the drain of $M_1$ moves by $v_{d1}=a_{dm1}v_{i1}$ and the drain of $M_2$ by $v_{d2}=-a_{dm1}v_{i1}$. The voltage across each capacitor connected to the gate of $M_1$ is

$$
v_{i1}-v_{d1}=v_{i1}(1-a_{dm1})\ \ (C_{gd1}),\qquad
v_{i1}-v_{d2}=v_{i1}(1+a_{dm1})\ \ (C_n).
$$

The total current drawn from $V_{i1}$, divided by $sv_{i1}$, is the DM input capacitance per side:

$$
C_{idh}=C_{gs1}+C_{gd1}(1-a_{dm1})+C_n(1+a_{dm1}).
$$

With $a_{dm1}=-137$, the $C_{gd1}$ term is multiplied by 138 and the $C_n$ term by $-136$: the current through $C_n$ opposes the Miller current.

### Step 3 — Value of $C_n$

Setting $C_n=C_{gd1}$ makes the $a_{dm1}$ terms cancel:

$$
C_{idh}=C_{gs1}+C_{gd1}(1-a_{dm1}+1+a_{dm1})=C_{gs1}+2C_{gd1}.
$$

With $C_{gd}=C_{ol}W$:

$$
C_n=C_{gd1}=C_{ol}W_1=(0.35\ \mathrm{fF/\mu m})(77\ \mu\mathrm m)=27\ \mathrm{fF}.
$$

### Step 4 — Effect

Without neutralization the gate–drain contribution is $C_{gd1}(1-a_{dm1})=(27\ \mathrm{fF})(138)=3.7$ pF per side. With the cross-coupled $C_n=27$ fF it becomes $2C_{gd1}=54$ fF, so the Miller multiplication is removed for DM signals. Exact cancellation depends on $C_n$ matching $C_{gd1}$ and on the two drains swinging symmetrically.
