[Fig. 1] shows a PLL in which an external voltage $V_{ex}$ is added to the output of the loop filter to form the VCO control voltage. Suppose the PLL is modified to the charge-pump architecture shown in [Fig. 2]:
- a PFD drives a charge pump with currents $I_1 = I_2 = I_P$;
- the charge pump drives a loop filter of $R_P$ in series with $C_P$;
- $V_{ex}$ is still added to the loop-filter output to form $V_{cont}$;
- the VCO obeys $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$.

Using the continuous-time (averaged) model of the PFD/charge pump, determine the transfer function $\Phi_{out}(s)/V_{ex}(s)$, where $\Phi_{out}$ denotes the excess phase of $V_{out}$ (the input is a clean periodic signal).
