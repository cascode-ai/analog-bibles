# Detailed solution - A064

Because all gates, all drains and all sources are tied together, every transistor sees the same terminal voltages. Write each device's current in every region, sum them, and identify the single device whose current equals the sum.

### Step 1 — Common operating conditions

All $n$ transistors share $v_{GS}$, $v_{DS}$ and (with a common bulk) $v_{BS}$. They are made in the same process, so they also share $K'$, $V_{T0}$, $\gamma$ and $\phi_F$, hence the same threshold $V_T$ and the same region of operation. With equal lengths $L$, they also have the same channel-length-modulation parameter $\lambda$ (which depends on $L$).

### Step 2 — Each current is proportional to its own width

In the square-law model the current of device $i$ is

$$
i_{Di}=\frac{K'W_i}{L}\,f(v_{GS},v_{DS}),\qquad
f=\begin{cases}
0,&v_{GS}\le V_T,\\
(v_{GS}-V_T)v_{DS}-\tfrac12v_{DS}^2,&0<v_{DS}\le v_{GS}-V_T,\\
\tfrac12(v_{GS}-V_T)^2(1+\lambda v_{DS}),&v_{DS}\ge v_{GS}-V_T,
\end{cases}
$$

where $f$ is the same function for every device, since it depends only on the shared voltages and on $V_T$ and $\lambda$.

### Step 3 — Sum of the currents

The drains are connected, so the total drain current is the sum (KCL):

$$
i_D=\sum_{i=1}^{n}i_{Di}=\frac{K'}{L}\,f(v_{GS},v_{DS})\sum_{i=1}^{n}W_i=\frac{K'W_{eq}}{L_{eq}}\,f(v_{GS},v_{DS}).
$$

This is exactly the current of one transistor with

$$
W_{eq}=\sum_{i=1}^{n}W_i,\qquad L_{eq}=L,
$$

in every region, because the same factor $\sum W_i$ multiplies each branch of $f$. Keeping $L_{eq}=L$ (rather than any other pair with the same $W/L$) also keeps $\lambda$ and the gate area, $L\sum W_i$, equal to those of the parallel combination, so the gate capacitance is preserved as well. This is why a wide transistor is laid out as several parallel fingers of the same length.
