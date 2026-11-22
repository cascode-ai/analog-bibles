# Detailed solution - G126

Write the incremental gains at the two peaks and at the zero crossing, normalize their deviations to $A_{vQ}$, and form the sum and difference: the sum cancels the even-order term and the difference cancels the odd-order term.

### Step 1 — Incremental gains

Differentiating $v_o=a_1v_i+a_2v_i^2+a_3v_i^3$ gives $A_v=a_1+2a_2v_i+3a_3v_i^2$. At $v_i=+\hat v_i$, $0$ and $-\hat v_i$:

$$
A_v^\pm=a_1\pm2a_2\hat v_i+3a_3\hat v_i^2,\qquad A_{vQ}=a_1 .
$$

### Step 2 — Normalized gain errors

Subtracting $A_{vQ}$ and dividing by it,

$$
E^\pm=\frac{A_v^\pm-a_1}{a_1}=\pm2\frac{a_2}{a_1}\hat v_i+3\frac{a_3}{a_1}\hat v_i^2 .
$$

### Step 3 — Sum and difference

Adding, the $a_2$ terms cancel; subtracting, the $a_3$ terms cancel:

$$
E^++E^-=6\frac{a_3}{a_1}\hat v_i^2,\qquad E^+-E^-=4\frac{a_2}{a_1}\hat v_i .
$$

The sum measures the symmetric (odd-order, cubic) curvature of the characteristic and grows as $\hat v_i^2$; the difference measures its asymmetry (even-order, quadratic) and grows as $\hat v_i$.
