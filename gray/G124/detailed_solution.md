# Detailed solution - G124

The incremental gain is the slope of the transfer characteristic at the instantaneous operating point, so differentiate the power series term by term.

### Step 1 — Differentiate the series

With $v_o(v_i)=a_1v_i+a_2v_i^2+a_3v_i^3+\dots$, a power series can be differentiated term by term inside its range of convergence, using $\dfrac{d}{dv_i}v_i^n=nv_i^{\,n-1}$:

$$
A_v=\frac{dv_o}{dv_i}=a_1+2a_2v_i+3a_3v_i^2+\dots=\sum_{n\ge1}n\,a_nv_i^{\,n-1}.
$$

### Step 2 — Interpretation

The incremental gain is not a constant: it depends on the instantaneous input $v_i$, that is, on where along the characteristic the circuit sits at that moment. At the quiescent point ($v_i=0$) only the first term survives, $A_v=a_1$, the usual small-signal gain. The $2a_2v_i$ term makes the slope differ between positive and negative excursions (an asymmetric, even-order nonlinearity), while the $3a_3v_i^2$ term changes it equally for both signs (a symmetric, odd-order nonlinearity).

This slope differs from the large-signal ratio $v_o/v_i=a_1+a_2v_i+a_3v_i^2+\dots$; the two agree only at $v_i\to0$.
