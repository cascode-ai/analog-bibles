# Detailed solution - A020

Repeat the step-junction derivation with the new charge density. With no mobile carriers in the depletion region, the space charge is $\rho(x)=q[N_D(x)-N_A(x)]=qax$. Charge neutrality fixes the relation between the two edges, Gauss's law gives the field, and integrating the field gives the total potential $\phi_0-v_D$, which determines the width.

### Step 1 — Charge neutrality

The net charge in the depletion region must be zero, since the field vanishes in the neutral regions on both sides:

$$
\int_{x_p}^{x_n}qax\,dx=\frac{qa}{2}\left(x_n^2-x_p^2\right)=0
\;\Rightarrow\;
x_p=-x_n .
$$

Because $\rho(x)$ is odd in $x$, the depletion region is symmetric about the metallurgical junction, unlike the step junction where it extends mostly into the lighter side.

### Step 2 — Electric field

Gauss's law in one dimension, $dE/dx=\rho/\varepsilon_{Si}=qax/\varepsilon_{Si}$, integrated with the boundary condition $E(\pm x_n)=0$:

$$
E(x)=\frac{qa}{2\varepsilon_{Si}}\left(x^2-x_n^2\right),\qquad -x_n\le x\le x_n .
$$

The field is negative (pointing from n to p) and parabolic, with its largest magnitude $qax_n^2/(2\varepsilon_{Si})$ at $x=0$.

### Step 3 — Potential across the depletion region

The potential rise from the p edge to the n edge is

$$
\phi_0-v_D=-\int_{-x_n}^{x_n}E(x)\,dx
=-\frac{qa}{2\varepsilon_{Si}}\left[\frac{x^3}{3}-x_n^2x\right]_{-x_n}^{x_n}
=-\frac{qa}{2\varepsilon_{Si}}\left(-\frac{4}{3}x_n^3\right)
=\frac{2qa\,x_n^3}{3\varepsilon_{Si}} .
$$

### Step 4 — Depletion edges and width

Solving for $x_n$ and using $x_p=-x_n$:

$$
x_n=\left[\frac{3\varepsilon_{Si}(\phi_0-v_D)}{2qa}\right]^{1/3},
\qquad
x_p=-\left[\frac{3\varepsilon_{Si}(\phi_0-v_D)}{2qa}\right]^{1/3}.
$$

The total width is

$$
x_d=x_n-x_p=2x_n=\left[\frac{12\varepsilon_{Si}(\phi_0-v_D)}{qa}\right]^{1/3}.
$$

The edges now vary as the cube root of $(\phi_0-v_D)$ rather than the square root. Since the junction capacitance is $\varepsilon_{Si}A/x_d$, it varies as $(\phi_0-v_D)^{-1/3}$: the grading coefficient is $m=1/3$ instead of the step junction's $1/2$. The result holds only while $x_n$ stays inside the linear part of the profile in [Fig. 1]; at large reverse bias the depletion edges reach the flat regions and the behaviour moves toward that of a step junction.
