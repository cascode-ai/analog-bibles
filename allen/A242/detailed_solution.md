# Detailed solution - A242

Model the op amp as a finite-gain amplifier with a finite input impedance, close a general negative-feedback loop around it, and let the gain grow without bound. The feedback keeps the output finite, which forces the differential input voltage, and with it the input current, to zero.

### Step 1 — Op-amp and feedback model

Let the op amp produce

$$
v_{out}=A_vv_i,\qquad v_i=v_+-v_-,
$$

with a differential input impedance $Z_{id}$ between its inputs (resistance $R_{id}$ at low frequency). A feedback network returns a fraction $f>0$ of the output to the inverting input, so that with an external signal $v_S$ applied the differential input is

$$
v_i=v_S-fv_{out}.
$$

Negative feedback means $fA_v>0$: a rise of $v_{out}$ reduces $v_i$.

### Step 2 — Input voltage tends to zero

Substituting $v_{out}=A_vv_i$:

$$
v_i=v_S-fA_vv_i\quad\Rightarrow\quad v_i=\frac{v_S}{1+fA_v},\qquad
v_{out}=\frac{A_v}{1+fA_v}\,v_S .
$$

As $A_v\to\infty$ the output stays finite, $v_{out}\to v_S/f$, while

$$
v_i=\frac{v_S}{1+fA_v}\to0 .
$$

Equivalently, $v_i=v_{out}/A_v\to0$ because the feedback holds $v_{out}$ finite.

### Step 3 — Input current tends to zero

The current through the input port is set by the voltage across it:

$$
i_i=\frac{v_i}{Z_{id}}\to0
$$

for any nonzero $Z_{id}$, finite or infinite. (For a CMOS op amp, whose inputs are MOS gates, $Z_{id}$ is essentially infinite at low frequency anyway.)

### Step 4 — Conclusion

With infinite gain and negative feedback, the differential input has both zero voltage and zero current: it is a null port. The negative sign of the feedback is essential. With positive feedback, $1+fA_v$ can pass through zero, $v_i$ is no longer driven to zero, and the output runs to a supply rail instead of settling at a finite value.
