# Detailed solution - A024

The threshold voltage is the gate voltage needed to invert the surface, and part of it is the voltage needed to balance the fixed depletion charge under the gate. Follow how a reverse source–bulk bias changes the band bending required for inversion, then the depletion charge, then the gate voltage. The explanation is given for the n-channel device; for a p-channel device every polarity reverses and the magnitudes behave the same way.

### Step 1 — What the gate must supply at threshold

At threshold the gate must (a) bend the bands at the surface enough to create an inversion layer, and (b) place on the gate, through $C_{ox}$, a positive charge that terminates the negative ionized-acceptor charge $Q_b$ in the depletion region beneath it. The second requirement contributes a term $-Q_b/C_{ox}$ to $V_T$: the larger the depletion charge, the larger the threshold.

### Step 2 — Why the source–bulk voltage matters

The inversion layer is connected to the source, so its potential is tied to the source potential. With $v_{SB}>0$ the bulk is below the source, and the channel-to-bulk junction carries an extra reverse bias $v_{SB}$. For the surface to invert, its potential must therefore sit $2|\phi_F|+v_{SB}$ above the bulk instead of $2|\phi_F|$. Like any reverse-biased junction, the depletion region widens as the total potential across it grows:

$$
x_d=\sqrt{\frac{2\varepsilon_{Si}\left(2|\phi_F|+v_{SB}\right)}{qN_A}} .
$$

### Step 3 — More depletion charge, higher threshold

The depletion charge per unit area grows accordingly:

$$
|Q_b|=qN_Ax_d=\sqrt{2q\varepsilon_{Si}N_A\left(2|\phi_F|+v_{SB}\right)} .
$$

Every extra coulomb of bulk charge needs a matching coulomb on the gate before electrons can collect at the surface, which costs an extra gate voltage

$$
\Delta V_T=\frac{\Delta|Q_b|}{C_{ox}}
=\frac{\sqrt{2q\varepsilon_{Si}N_A}}{C_{ox}}\left(\sqrt{2|\phi_F|+v_{SB}}-\sqrt{2|\phi_F|}\right)
=\gamma\left(\sqrt{2|\phi_F|+v_{SB}}-\sqrt{2|\phi_F|}\right).
$$

This is exactly the body-effect term in the given expression. The increase is sub-linear, as a square root, because the depletion width grows only as the square root of the total band bending.

### Step 4 — Physical picture

The bulk acts as a second, "back" gate under the channel. Making it more negative relative to the source pulls more holes away from the surface, uncovering more negative acceptor charge and repelling electrons from the channel. The front gate must compensate with a higher voltage, so $|V_T|$ rises with $|v_{SB}|$. The argument requires the source–bulk junction to stay reverse biased; it is the depletion charge, not any current, that raises the threshold.
