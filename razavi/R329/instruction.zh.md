考虑 [图 1] 所示的共源级（common-source stage）：NMOS 管 $M_1$ 由栅极驱动，其负载为 PMOS 电流源（current source）$M_2$，后者的栅极接固定偏置电压 $V_b$。设 $(W/L)_1 = 50/0.5$，$I_{D1} = |I_{D2}| = 0.1$ mA，$V_{DD} = 3$ V；两个晶体管都必须工作在饱和区（saturation region）。若要求在输入参考热噪声电压（input-referred thermal noise voltage）中，$M_2$ 的贡献为 $M_1$ 贡献的五分之一（指电压，而不是电压的平方），该放大器的最大输出电压摆幅（output voltage swing）是多少？

器件参数按平方律（square law）模型给出：NMOS 的 $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，$V_{TH} = 0.7$ V；PMOS 的 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$，$V_{TH} = -0.8$ V。每个晶体管的沟道热噪声（channel thermal noise）建模为 $4kT\gamma g_m$，两个器件的 γ 相同。
