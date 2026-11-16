# Golden Solution - R621

## Reference answer

Proof by the total differential of the degenerated square law.
- Each side: $I_D = \tfrac12\mu_nC_{ox}\tfrac WL(V_b - I_DR_S - V_{TH})^2$, i.e., $V_{GS} = V_b - I_DR_S$ depends on $I_D$ itself.
- Total differential with respect to $\mu_nC_{ox}$, $W/L$, $V_{TH}$, $R_S$ and the induced $\Delta I_D$: $\Delta I_D = I_D\dfrac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\dfrac{\Delta(W/L)}{W/L} + g_m\left(-\Delta V_{TH} - R_S\Delta I_D - I_D\Delta R_S\right)$, with $g_m = \mu_nC_{ox}\tfrac WL(V_{GS}-V_{TH}) = 2I_D/(V_{GS}-V_{TH})$.
- Collect $\Delta I_D$: $\Delta I_D(1 + g_mR_S) = I_D\left[\dfrac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \dfrac{\Delta(W/L)}{W/L}\right] - g_m\Delta V_{TH} - g_mI_D\Delta R_S$.
- Divide by $I_D$ and use $g_m/I_D = 2/(V_{GS}-V_{TH})$ to obtain the stated result.
- Interpretation: the transistor mismatches are divided by $1 + g_mR_S$, which is significant only if $g_mR_S > 1$; the resistor term $g_m\Delta R_S/(1+g_mR_S)$ tends to $\Delta R_S/R_S$ for large $g_mR_S$, so the scheme helps only if the resistors match better than the transistors. The price is the headroom $I_DR_S$. (With body effect, $g_m$ in the feedback terms becomes $g_m + g_{mb}$.)

## Grading notes

+2: a correct derivation reaching the stated formula, including the feedback term $-g_mR_S\Delta I_D$ that produces $1/(1+g_mR_S)$, the $-g_mI_D\Delta R_S$ term, and $g_m/I_D = 2/(V_{GS}-V_{TH})$. +1: correct derivation with a sign slip in one term that is fixed or clearly typographical, or a terse but correct derivation. 0: derivation that omits the $R_S\Delta I_D$ feedback term and so cannot produce $1/(1+g_mR_S)$, with the rest sound. -2 (asserted as fact): a different final result asserted (e.g., a factor $1/(1+g_mR_S)^2$, or the resistor term absent), or the claim that degeneration increases the transistor-induced mismatch.
