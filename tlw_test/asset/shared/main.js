var debugMode = 0;
var buttonLock = false;

var pageContent;

var xmlobj;

var replace_a;
var replace_b;
var replace_c;
var replace_d;
var replace_e;
var replace_f;
var replace_h;

var sys_aud_id_1 = 0;
var sys_aud_id_2 = "0";

var loop1;
var loop2;
var loop3;
var loop4;
var loop5;
var loop6;
var loop7;
var loop8;

var errorCache = [];
var notifCache = [];

var sys_aud_src = {
	menu_opn: "data:audio/mp3;base64,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rwbo+LpOi3ZsrYGxtUY0yNiCnKaqKyE1JZJ9P9VSNyy3Yt2O4W5NAzTVTJUplJTqpq2LrW4pJFEusIhjpCEwqNAIhGhaXyLghcAgOIFkCAqFAYnGx1znlZcrcwtiC4lcrDLxao0t+5N1TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",
	menu_sel: "data:audio/mp3;base64,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",
	menu_pop: "data:audio/mp3;base64,//uwxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAJygBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA5TEFNRTMuMTAwAc0AAAAAAAAAABTAJATvQQAAwAAACconrchHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7DEAAAfzaM0VJyABNJF6ZM1sAAAALFZO3RACAIEhcAAYTC5OUAIGBtdjEHcvSt/3/n4YXexN37T6MMYhIVzllC0CdD0g0MyTzRRBSaDBrsmiGw4CAFvGYgUMHBsaMk0zSQUOtduhfwtorxVcxBjGEBQDQFVwKGYoacYMCNl021wE2qsZDByWHlccRQhTPrw8nhoEwzTLBWGMQwzBF2mQcZxAOAaZAaw6g7T3QQloPrHi8QYYux+HTRUSIZZZfdrbX4vEGHtfi9yMRiMXqd/Icsbp6en7hT0+esMMOZxiWWN50+fcKe33WGGHN4Yfn39c/DDn///vDD/zz7////+sPrxiWWN09PT9qRuXqDH4fnPwwAIwAIAAQAZgFRiYiHSuA2UWCmIBvmIA0GBcQFgywokViziVC8qfLyalr+twmGnVatl+JZkqm9RhAiYKMTCsyOpcKNP83zITW1IOwAQKFtC0SM5iSKBlAAg8Rd5N0CAoqICxGSA6vzBgcQiSJhkIw6e6GQP2jXEnmbyGHhfUqKJwmSfSfjgKBQtnqMhZkxFFO1bA5aS0l72NVMCTzmHc18FYskRIIAYkttQNqLjM8wlMGyqkXvIYnIpbJaz3JLWHUlOGfIjhaptWb1JqphjRfqx/6xxnbNf9ZXMdXd9vY1N/rmuZ9xp6fDDD5u93WOVWmlXZTrPDHKzP3O8529rG5rK3SY54a7Yzy5vDOkvd//////pfr2a8qx/sx9u7jf1fobv/////+OreqtXlrmNNnlny3Vq5ABgAAACPxcYxorBw7EqMOFzBDFsjPuaUgFgJZwUCe4qUqIIBkQceJ3KZP/7ssQVACQ99zq5vgAE8kIdQ42QAIKM0Spc3LXrtcMOCCl8idJQJCV//4kKCzgyB5kUBM1RrRaU73//+CAmnyZLAYABRikSgIHsiT1MEBUwwG3pL+6///xEFjMI4Mo7o7uTTMgkMJgVCJB0wIEQaLDGomBIWMQhZCv//9dxXWu1bSMCqwIATKYMZAhkvb5l3XigJr0B75////7zsjeuxDb6v5QN9dd5wotHoZnYClMZqPq7v//////+7q64fbVAM68dfmGX7h1sdLGr8M1r8Rpsq2oaf7VNKqsZ//////////fFrlDXffGgcFQaHWvSmFyioueG5Sun/////92YlFqv4ymm3jjz+U0zlKpcmZ3Resek0DeApwFoLfd4ztuxa+tb5/L+FfLf653uOt46/Luetfz9Z7qdxnaek7q1W+jp6S1TQ9LrF2JTDwxh5myPTTSqgjOL4NFbo5axWNPXuOSengWBn0p7cZqvu/LSGdKnXY0mPOW6i8XagV0l8q3QC5TZGlLBvE7MCW3RYozuJQLDtWIJnMTY7My5h0hbm9UBuu+D+5T1W49TrcisDQ7R2LUgdeDXaooHXw+7jtqtVsSgLX0QGJuqmWkIs1IRnt5PsxAy5CQSZLAmbRiVQNHVUCQV0QQEPIpHp2Ggq0EDHA1BkY5CGZFUoSXKoCaKQxhmBY8yWjNUXmGUgiM3VgkwejESZhDmGCZQ6QpcAlLJsDJvOIAkRGyzeMNdooKIWzp8A4poemM+WjMBk1HWAhKIkCDp1ZBGYhbB1PUSE9q2cfkYAVkUSgEUFPKJ2+f/LU//85W/98/bXlpam85SR1o13hIFPf/7ssQUg+RWEtgDPz7AAAA0gAAABFWuidrQo1z9Vhcl2oaVVrYqq7TrIaURPOT3qVkNJ+nmZElxSAuRsjpH0pFerEcX1kOZNhwnOLilBvIMelNHMhziPpBkFViqkRw3T3QB1JFGl+S5yoSiUJUy1BgsrczSM2cQXrYhx2yeHazouwpsvljqXzsJ1LAtoqaBkjUmTBMTEAwTnq2q5bsmM75d1u7Jaau7KjycQEBVmUSRnGhQKInmBBUSDFEIAVg1bFdqRQlKorCJBAQEcJFlTJcBz5yShZQ3yE3zKPV2X9LQwInsZZBKSZwadBlMhwhikGikDVz4tJaj1QAjYQlRIFmkmFCjhYLVmcKuR3F1W+JMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
	menu_cls: "data:audio/mp3;base64,//uwxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAHAAATlgAkJCQkJCQkJCQkJCQkJElJSUlJSUlJSUlJSUlJbW1tbW1tbW1tbW1tbW2SkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2ttvb29vb29vb29vb29vb//////////////////8AAAA5TEFNRTMuMTAwAc0AAAAAAAAAABTAJAaRQQAAwAAAE5apRc6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7DEAAAfRd0LNMYADPvF5nszoAAAUCVEAYkCQDQmOiGAOAcK4kggAgBACAHFBXAgAQCANACExxYYA3BuI4liWJYliWDcAgEAOCIeOadgmAQRIiWJYln791iwwMDAwMCQJAEwJgBgBgTA+I5/ASye+wcGBgscXrzMzX+wcGAlmZ+ZiGCYAYAYBwCAcEQmLOmZmdbXnZmZr1ixY5p2ZxkgCYEwPiOTz9/8ve97/iwwBuBMCYEwJg3J5/7a9evvlKUmiw4PFnNmYHAaHkJLEMG4ln7iwwWQiGBMD5b2AkCQeVJYlk8SBIBoIhM47MzMwWUpSlGFhmZr373vMzrZ2ZmZmZn54sWLDA8MAAAAd/+ATBopM4oYEQEQUUMCUAAgwyqwDCDkVhlqKYRa0tZj4QG/yA1X7H2jJqPg7rcI2v1h1p0HkZdWrBAAMUF837cR9XflUWltJDhUABQ2bsq8MATlinrTsN1dnJEhxQyIMHP0BmUpi8ejGNPRyCJW5SusFC415hgxKh3UmLV+I6zkjgz0olNQ2JENJhDE3J86YceOGdG42e85has3Lmcrt01LczoTlmQIQFhBQQViBwQaSKXAoZftds28q9ytjymna1DKMZrOvLsgc0WeW8DgkNxiR0lmcZ5nynwp+YYXamWNjC7+eNnKrdy3je3rvpWJfF8QEjOWLMYERTNWNBBYDLBYKWeM4GCICTeHcO4awx//xzz/9Yf//////ft18t7/PuX7/L+8w//////8FBAUYYHI3nnKerL8G0hufjEzD8gp87h5d8urpqY4QeBgMBwMAwB4g0aRBGMglyosi2ZwSIjOX4uFgP/7ssQSACWWFWn5nQAMsT4sOzWgAAioUyBplFmWlMAisvs5EpCpc2s0lPLlZden3csuiFgAhOmMaXLl3mdJDEUNiuKMKaxeAoBzMtufWh/Kw4+RkAyFSzS34KLsxt5VZil/7ks5GLoUGGNKAWaRa0PjHkTKHIjlNZzVrUvfvDGk30wpJqLdS5pCMHgIBDwQY0fVqRrHmes7Nv+W6e3nXtlBheDI1NWnNMQkNmd9AIrzlNTb1l9NvVqLxCKVJZyn/m83/HR5q1ZWJAghOguxNqTg5VVQuIs1eCgWivQeLLmiMq3Hb39x1a+5EqG9zHX7z7h3d2rlhlz89fclmdJjb////////rf//vWOt5R+c+tlv///////7+fbGGAguDxEXeXUuBIRoZCggAAAFYYrJix9YrjThg1pbcyAsQnQAATwME9MJAdYwQZMgwAExcNh60VyxqNAYQcQoDjJfBHYoDp7ROZVVLbGDJDzlXqirEFU4XGZm+IgTzqXGDBISGhsgaG5a6YzB0tm6OVonMzHgE0gbDLP2oww/s7WfWQ1JVWIBAkGUHxg1fkDQe+sZxUyV1GssMatfnWeU0qi6i6uoo8Kj291YljDTpNea1hvdXPtNl7GA4Mg6k8ju+kQdZ/3dn4ZhyN1WfNtL4rjAUW7lnjS/jjreL/rsbWHX/qu+wSAFNFcMIdt/ozNQ1IpfGmtONlabpNcf6M2cqW5j3nN6lWOtf8ANjr096UxXcvvYQ1Yl9rfbv//////ym1+9Zd/uWWPKtLGQVb4r9gWhEMxAAAAAAgUDQGX9TNEIk1i+QQ6Hk0UvYiz5otl1rbgomtxgJeAkP/7ssQUgOVt4TndjAAMkL0luYwy+VtrDapUusQge1oqYy6qrsyiGS/yYy7ktmTLVRmV49r0r6h9n0OM8SSQmMIEeRHhthITtW44ydO5uMeWsxIv9KlHmaQ+ulfL6OnK20QxRXR8RubMm2WyVhi9OQFVifh7JuZcVWJSlsijiJauIbZwvWJu+t+AbrLVl20kWXpKxFOJgrtssf/FzKFzXZfpnTTXadBXTjsxW04rkqbwJOs5gRuU1blNLGpfYeZsccieMhcyVMSgZ2Ybr00sWFordxrNNJ4rDMAwJK5TFsrtlny/nKfpYKBb0M3YzOzMVlNWvMy3Ogl2Wd+rU19uz3uOWvzw7vfeVrWW63dY7xy+qzw9JhVasUsIqiQAAJHD0QEweoRGYSlUFSqkTKTKa8rlWV2EHKZ4ZpT7UVciNzpLDMlR0XaXhZAC5hDUiICddY7k0zLoffdTFYV2y1DxAECHJrq8GMsMekVcHMUMLAjANZqAxAAqeHFUVquQ4L0O7AsmfRmzQdKxPZbbKNAZHCkoFNC5y+04ErmLQK26cqWEJMQ0l3eWeX9bomG7JWKmfBzn/eyKr7ghTaB2iJhKzV5YuV9FH3ylz2x6PPUXqo3qhTmI7Pm4ObTGHJjSRaLgO9EopOSiXRa1DluGZ+ek7w2aeVsplsWdxCa01Qey2KGrToegivI1Yl6V9YvRG7JTHVS0VjqXKOpIbWVvfj629HjuK1ppfIe6lOt22p29OVtTYluXvR6LMnDbn1FKG1TQABQRLi5aR1gtAraoGkAiouV8mAruoBGG3BgUCqAsua6VJofBRamIOUL2KrJ0lDErAA8Cq//7ssQbgOT6CyaMvN8M1MGj1Zwy+BKAltlU1D0Q1YS5I4emCqxroGJcFH4vErU5BhojiwoOYiJQiZYbcQy0xyFnLSBggXBjKxmYsvSJa0qdTamrNhVAicVRWgraAbQYpooUcEAlBYlWLYtK4eiqRCSklYS3ifBDhirgxh+moOczw6AHInBYoiHqE4kMGSzIFlbiTF2Hmpx7HMiIyfOCeDg5h/F7cEKb1E2OrJ8/fAfQEEqEjtmiNKVtIqTtI0llcQVCqs2TyJs1t7hDbrtWW+1i9NbipUgzK7sq5b9Zb6K2HAcWmM5uejIZrVN30JMnqd0Gy3V61CKGaa1achirrDyToRRKy10QC6qsrNmWPgzGG1NFTMAVNF3/Z4wQRIQ9ByxBZOXqwEOigjfpwhQciKBg7yB4wsQl5MMbRVZODKgaykmZIAlYkLBYCXBhIDhIKpqrTUNBXQwCCA/OHUDHyOqsYXACDgS5vINKMhy2qsKvhYEBJpq0MJYWSDStL4w8ikRVZQhCNHcOAVYkW5aOkXSj64i5AgKX6028HmvqhQnI/UwumfjkUb11lcbijLX12rqHH6YWsE0Z4WsN1dVtIAkUENvpqHcoQyp4H/abAEir3MJ5p1DRw7DL9O9Ga1BH3dklWN6lEdZ9MTSg0OuA75w8UC7J8Mzu58+epyGTSqiHlUWjk1PS83YqlouJLnx1xgoNzWuu2ry+NYcwLjxZjKJLYkKlP35n6uLYFiozVTeaJEpZtlNXrSxfFUMXmAAAJ4UPE8RgJiiwjtt+3qZaA52GaLEYEaDL/teeMFCM8cAQzC3SgzuC0gwKPRdc5TErD1GxSv/7ssQcAOUODR0M4ZPEqcGjoZwysGDQy5CMIU77HS7GKaiML/kSGJshZHNN0ToDFspMZAy419owXAWeWdJW3RwV5CGSplOrNqOjAGnN+gAh1cTQ03Etm5O8w9DVxmSrOUVlSGsfYJfh9t5a6skfikZ20t3YjSObRtbYrTMnasnUzaln7kNAyEMxL7txyUjiIBMICYK1qEwDpbOrCp+NRESwClghlN4K3lWoz3oFquSeBU5IQnHyE83SNqBasLSVRASUM7LY8rJQVR9AdrDYsFhOkUEaGLlpKhVOOpIC4+fI8NyeqJZfxkkGT6xa/rKuq4rmSV0+fR8Q+kymCMnp0N6p5zP3fuWiABSQ1sZRSSFABoFZKMyYKer2sYZxPo9m+Ara80SHgmhF/yCABxoVOAPJsGQ0joWyaSEMdCfc13ktxp6W6lbeJ5KfRXXOjsx9wnyaxk3Fqxf1OUZMpWgkfZpSecrTsYQ16fgxOx+qdgDJXUjq7+PvAD1wyzcI9EpTGl9rPdmcmWJQyxx02Lus/CnViIt7LI5C4ZltDLG0ZNDby0zNmsyJ7IFH0KSoLggOTsRajI9FYiAuRjAehHHdUE0BRIDYgtlYLXR+VE8tnxQEQTvOCuUxY+aqUw/WIy9ktJh3QzweY6FwSxPAsfmpXskOH6OnrDaaJB0PGyWuEZAcFTglEspNLERTjP76uKlyJRpCWIZ6fxJ36rUzcdhzaRW09Mj1Ue3qmUnq1QloY+xRVAAENV2FAUBAMtZkLaFuk6ZM7UNo8mAaaipmAoov+kK3oqAa8xzrF+l3L5k7Sm7tRgZhsUZUkU0QssXGWszEu6W1TP/7ssQhgOaGCxKsvZ5E50JclJfn2hewvKWtZbDsMv6/sO4UzIVBVAUiV0rCrphhnMMI9Fsi5RbIskW2AoCDrew1TuysK02zxSlxO4vRfScpUfQ4oDNBai3LSdNFSDdFxShKhckKfFuLkmBbkuJKJidKGoaSk6msGpNOQRHWqUlA2EICQjAkPwSmtTk9oShKbiMnTkxORJUlYSm1xKEY+hpGSRJMj65yYqcaXVLx8VSzEmJS8yeORJEkxPUISiyVgBgDE6NgyvCTQEgNUCEWkpZOyyoEIKjJuEGplYkgVCkmmJVKpOPicDZ9ocj4nGLawpsHY4uKkMCIUqTqxaOmEsZr58kNIOQARUUhkUs9YmajiwqFSJq0KJE17VIRSKUUrQoULMaIRSSs51kSJCysiRIkW2iFQqJkTVoYytVCQgiSxpChQuInxWIk6oYtWFDUNLaISZUZiQ5aTqhTpouaGuMKV6wq07icoSwnKdLwlRClEnWAtxCls5XFchUhqh6hbiFFycmFQ1P5bVr0nompCVm0iHOadZWVFC3CFCaktNE0VS3KJ8+eq2ZiZnzFGYbsww55oZclnLXVbVAljKZIBmDO0u5YZMJ4nmZkgGZswF5EvlTLtWUlc/0KYCoCBCTOLaG7hapM4uaXxCwZpKixNiAkxhwMyAW8cp/yzqyzAHNB03mTOPNRcMVmwoGW+VVIRDROMsw11jPGMMAuUACwEizWAXtYkMBmcaiSIAzWfNIECInRmdiqQhilGisAjVq2OkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7ssQAA8AAAaQAAAAgAAA0gAAABExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
	menu_err: "data:audio/mp3;base64,//OExAAAAAAAAAAAAEluZm8AAAAPAAAAKAAAHsAABgYMDBMTExkZICAgJiYsLCwzMzk5OUBARkZGTExTU1NZWWBgYGZmbGxsc3N5eXmAgIaGhoyMk5OTmZmgoKCmpqysrLOzubm5wMDGxsbMzNPT09nZ4ODg5ubs7Ozz8/n5+f//AAAAOUxBTUUzLjEwMAF4AAAAAAAAAAAUQCQEUyIAAEAAAB7AJ/cQUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//OExAAcESqxVUlIAPkBJQrwhDPc5whCoQy0YIChiyMLgmbUAOCZtIgFAoYsUMWjbpAgxRBCH8985z31CH/ntKIGFxQSAMH+CAYWCCw/+CETh8ufhhYIXygYg+OB9QYonyg0EDhc+Iz//4IOny4f+sPlw/DE5yhz84UDEPqVv8mqo1FDABJITRkVqsTzneJiKfAKgzuidRWBrcYpPCgDINozvJVwHz6UwjAiDGritmbHNxHi/7KFU+7SDhIcy7gw//OExEI4xDrrH5h4ADd4E+hi7q2q3U+qyHPfNc4Bgf+8AH0gZL4/qd9ps/8D1uv96+/x2JCI9ov3iZqDrp9WvXUpnZ37179nzI5X9ZsQMFmPLscaDqvtu6RtMvxf9wGOH8UjMmY9Pi/91ygvC3I9znN6xMfohDpY1YR90q9ze2M0gftjrdt6zjOqZrvNfi26Zbn/trFL6rW2vWmawoLexooa8aurZtHjUrJllki28qAQcCAxLi7U9IkFia2216wR//OExBIpe3K+Hc+YACFDCNueQRg6hZizVM1qYMARERorJkfJidA1cAaEO4+cWt2rsyDqpTMcwZs8mTpNFZiQKLE0F+gA8iUhxGy2Xq+yl0q0F11dl+pbEqQ1FHrX9Wp60WICbrZNGsxdu7uk6kraqQxqPVSPmxspNkR8ESNjUurQqmBeU6tpdZTpf0VWpI9ZkHe4ataGGDxkVtCpR8xDh1ImAAUAX7MzzK/jKpbv+dQ4jSgABmvU4NMIsOsTSpHe//OExB8tc6Kl+NSHkdT8DEA4HRYxT8qwA0qeZgaO8HLH7nKapnewwua7rXMf/VNPV3+nrUjh65DUOoEaCdAJEuDCNT6B+kp1rdZjeo4pGm1dJndJFHxdifkk0V3Wgy2ouiYV0XIGRhskXklTo7FIsrWp0aCPRLos5LP4+ZLWFtbHl3GKmRpdy3uWXm631Q1mszHXkpMD+EESnTlYuzn4+K4c9+rJMBQAx6STudujnatze7XYwUMAKGWpEgSZRhSf//OExBwrU66l+NNLpUPrv1Ze2wqQNGDh7HLGJN0h1VUyd0MWv1S28eb338e5YY/vLdm5IpTb7HKsts1O4rTEp0JrZ9/HmWnS1tUggt7qTPUkkTVSVCcUmGkYA8fQZHR30XexyKBRBzNewCxZKqrOiMd+gCuhEM8TozHlnkq9qu1noxtNFaVmXJnc91ZstDqjCtupxIlFIHNHf2hsFg6q6AFAHMKa1RcqSyV575TkAYMMjKt04wFFKF72DVyDt3Z3//OExCErI/6hWNIHrQXOGnnnnM7EBtlnGBmg4iU+KW7Gf7/8+f+eP5/nRW6WA6aljz/08ij+6QsFQgFJpN+8P5llXNVN7u6UrRdU1Q1LMTwIIEfu5H19z1PfcqgfDT+01YGzvS1Vy81MTdXQkeKqWs7/z1JqR0ovoy/GyPT6R2FCJ1tI4fShl9giytqeZw3yNcoPjVUj/So6rhAWBHyl9LWdSR87+7eZYBP+BhDF5aCAyWY4CCBMs79mEkglKSU6//OExCck+kKp+NPFLcdSl8YeWkZjQJGorCx84tnOrRqbpbV30c9lHFYoENnV7P7AyQREdl3v/7xnurIiVZ6sntb2VbdSbKdGqRGNIyUNsD7+wdY52PC2tV1W/ndCy/S9zrMm61483Xu/0bxuD/y69nVrQH3vsew1y7WnIAwHFnohKO1bM7KbOOrfCEAoTMNxXj/isTJB0ABpsmeWJShtUOI9jJs6TN9FHrr8H7gPWQsQLI+ZAweCpFsQcKYgSJER//OExEYjeSKmMMjfKQLrbiD9fjTtfpvuyarMkWa/PvbLa4s5/g/GYVeWHBd+5/rwy3tx3aHnNZ0UGVOtNb/Jvdf3uLv/6H/+OFbr/cz3yMe/ks/4rs8QBAA8EaR3GVUkx2HaaO5b7i+w0nC6GDpUgHRgQRg6sjm8k+6VeWjwXmv+/2HV8jHdYswq35v73bfVQXUNUyEJ2Sx0kYf7sKAH8nmdf2xdRiYO/HVThT3S7mX0SFUzx/B4wEx4XG2lnpvU//OExGsi6caqWtLHLJhZFB0WiM6IxG1iSTi4ONoZ1OeYftTdFrlEI6UVJbULRbYgBAAaCZBNQ3CJd2vKL+Od3ib5FsJMKFxgchhsgRBUDMaacoH6VQImOdxuQaz2NNePCorfdU0xuT9fJ3da1OCS49OBHxTM2ixNgXjyFHVrVUYJPWjW1b0qmdeplmD1pfMvc0lLLFWMCKkhBTi8XJIdU9IpWTD9CBJTUxI5DAsy8YarU5bekUctAsFAodS2taox//OExJIkCbqmWMpbKKAdXHlexK6aksWqvcqhCJhgcYGWMcko0AEQMyUWbG8v4W4GLAUhJqZ4dpIaizGDE4QWBI2YOpdWmh1u7FE5Nkis1Ni65mtA2BVNRRUfQTykcJmpw67Cczd+EyHcw4aaxh00VQbOFEPfFYVUdVW5Z9SjBFllTm5VUyhqSSTZoy6ZFj1pw4VliD55LNBcWHSBWr0EGEGepqGS5VbFmn1h3AsJVQGLnqwxMsOI4SEjIF4pqlht//OExLQkIcKh8NtHLKcIwxvQMPWaarATIn9WFNCjBTVbwSTlq7bp253XjukHtNaTjlkc2XyGt0HuGwELt5vJ+48aNNHsb1LF877qVG/LzVFWuLy76XQPX59mOVsay/GTPSnb7vk+1yuynVeHJV/urb9W/Umv/8vw2K7qMYAICnnKtNbhLz005zdmPCBDEoA1ALElJ6h4+CEkCjRr4KPAz2xdszmhclOHFHLnLdJDbwuKVQExi7HppgzOyR5/iPvd//OExNYkMS6ZeNGfKf1t90j+NEtPl6/iZ81mAN2NEzfWtW1t2zc0wQTUc67sSF5Xy2qk1pLfySLRGxUgj4RXAIdj1E7ZQOg4SdJR3fMjjXAthJA4wco7Ez7R7jlTugZUciz60M08c9at0SV1RQ6dd2CQjLithiYrZRBBp0gEZy+xcrX52WXv7KZUIiE2YEMJnFgngBryoKIRE1cQRbg6ec1JERH5mglBMumbTMUp2vF1jVoIIJoFH45DX7n0hbYd//OExPgtBDKJ8NvHLaELP3rq2dYee9ouBBPK8thtNzF8jvfbiXGM1ppnkizpGhRkOudQ31mZgLnGqIQkkEdEakPKT60Ww5JCS5IFLubm+RthFMmLIsAW+4ncgPaGhyOg+iETugYr98lfB36iHOwYgXgT9ZvSleJXBESrxKpe1c5S0l1OQO8TI0EHEL2mLE4kvCAdM6JI/apJp/S5oZqvLfsU7cFZoGSUM91jQhJ/REBuKSj1w6wQrSOG1Yx1tB6G//OExPcrHAKJSNrHLSZQXkpByZkpCASB5BoaC2aoVQl2ZjlyKs2UBOkqaWQXQQOtdBg4JDWtQaPXBSEYgl0I8Eiuo70KaJYxYJaxUxaAtAax5ISi2Uwk03OEzoosWe1jnQhmCbqmhFaSMkHXIkCaA1jRU3hqEIAICzSzUCUkelWVrK/k/4gKgVamYC6FbOTAFQeNgQKCY6lY90OKbL+IBIIRY5d1Zbkm8xELAZpueasGwQHpGWOPGlwTIzlIkYct//OExP0sbBKIoNoHL11T0tErIWV1eV4eX6popOhzjl6upTHyJba8wmMZY4zNGsz2tPa2jtVUowz4YzSi0rRTzi8UXQVUgwKjU7ChgrhFZxyKrA6BrVI8GyIUkpBBwfHJJDNeqbQc+AYccg2RRkgIYzawyDByNjpOiMKFVXQEYRp8IhVgugp+3M86EYYB6NMHhEeGnmNnhMSiFUNnWS3z8zVGvYdKkU6OzXpF5lUJjCY5y0WZWJpQBsKTq11IRg6c//OExP4uTDKKINoHOfJvRHpJFlspJJItq4fimxCMI3PZeZOqkitiqrn5p9u9nwchPgqY2EEKMliDMdmHNtIkbOaMcjZeQQ5s9H3RnJJM2XLLNr2xtJzuISbxM16PcEb1FFqUuo9kMJPjb7Tion+reXvu2kvTG2pOdK0m0avp3fOhGHujzISzLyGqnWqIgB3lIQE2bKtTcoMLESekdgBkJMrPxoRWUYi2kRyYaAn0mxQBNRo5lmwjIBpSn6fDOEzi//OExPcwnDqBSNpNLLoRhAC0gFD5TWSR/tvHlS801juTrZpJvJHC2y0ZCUkEIu1tu0R8+k8mU1JcvWdpsorvpDKajsZUSYDLl6tOaqrKMbX+xWFc5ZI+FlWdZUh46LWimYeq0keLZk0daD8FogZm+VwZlUelpFG6OwFQhOjqzYZv9U1I182bO3Ve1HNZSMIFm52Vfo0mlmFXqBLEN2SA0pccDSY6YQh0KqBpbrR0duAMeaQ2GF2SGSelA8qWzOgG//OExOcx/Dp94N8NBJNyZlcqYsdkmzaQXJlqg6AclE0+vEjGSKd7rLWeGBCMWW9sEuLisTUHKC3BzUM8YoewK0jM8EiTyPtZFNVQyZCtfE3VSNycckgYolcmPBxzemAlZWWqlXCL6ILL6EVK8K0JsamqUcGsvuJYmEuIbZbiCQ3iVdxXhGvHR2ZSQVxyjP0M4MEzt3bQqDlVKhAIAm6SP1qWHfh6I2LOqoqXE1kCTJ3m6mAGwsJAwxNyEH5hqPtA//OExNIqlDKBQE6GeVCR0jNDGJfSd1G2AvyomaBOgI7jhMRtdvsFU+S7Nq9bt/6xF6D8pRsbCt4/Tv7Ajq7kRE2aPsylkFb2NTOEeuUtVC1+J6SmS/DIyUi9bTuiFqmb7aUofykfYXLNixd88rk8Utcj1MeWGnlt3ftbPcFkpmXthaYkt1FMQU1FDAxWp4j35fAUOPx3udEFxIriTBRkWCHXMRMBYER4OABUkJfUkCfIWPQNKKw01LWZ68L/LGJR//OExNon9BKGKNmHLUFtdmoMVW5s15RTl7opsTgzDNBQJ2ciyU7FPY1tM59b5MjJDX1M/PPtJrJkuTdacONS4VM7qstEFOGZlbMyYEbqecuxLz+x1+tjVCNrOGzywyJdG9U9XuxnQqp5bTSN/L0nLWxmBtKBFemi8apoxCLtPPbrxAEh4bjBgy/6WxhLiY4AiM4ER6zCMvg4zugQPO4IYEkViefh3XWT+MaRIxWDk14IempT4d5uiTB2ycNUiWXi//OExOknLDJ9SNlHIRjnLNRaqSx4OrZVNT/ku5xplOb8D8+NyrKvZ0plG+02rY2NiVkZdTUdM+iRLIwr9fsikxmLv7Z+57VsGWiViynYz0W7lTZ5qN7Gm708zzpWvKbyVeZhRNEyz0tQo3G7Xh5F1Mx9Na8Qg3PJ1BVdDYnJmrbZKMoqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqrYDC4VHJDNExEnFJOUEJ8PZF32bxQwA1ONHsilvPew//OExP8wlDJswN8NBY06xUDAoC42OV16FZpSxA2LUayOeGGK2V1PdB7aEYWWw9cqpxFwqQu5iyyj/42DCu9Zt/by/v381JUl/Nm/9+p8xbb3fsU/JXXvkXXP+zFPubvbEzvtmbplmXdqlgZx+kk0w7+69VlhDx81i6FGKiBVgu9RIrmphBihdHWxiIkFhokTTJBJp8NUrtq6ISAiY1xXvpGtqL0ThGcf5h42zivHKepamsPiHzPcr0ROmWo+YeYf//OExNIhgPp9SE6KdWDX1XK8vBh6jieFPvhr9ErReOWYhsrbMlmeZrXZqXFTdslNxEo7e2R3ydP9lXMWrefe+p/PpMtoeu3KxUZ8d06pCcaoQPOxrtinRYzMPuWLLKzymY167GYmq87dV2/UV7MncbYRx+e7Dqe5uT5gBEgZBZkIKIKKtFkbchRBMYDAgzEgR2wsqBwAAAUbGFIPdKXjiw6HEU+0LDOs7KHFS4LkBrHwZyIK5BhJ12r8/Xci+Z3l//OExP8uNDZswE7MeGVDN5tyl0zQ+KwnE7lNSZT5b5d4hXikz9w4xr2lzVKTVhyTtWVJs9iDPFtpkaxRfYz2iflW7s3t78a6SfIo2z7j7RcT5aVlX4jfErWUy8ld2uMrHaa41p7xuVGU6Gb2vkUC6tVR1wrovVe7erwlsWlRlTGACARbl8qvQznSSiM47qyoUGj7wUXtCiRkwYkxFHxhk6bURxeF1AqHIvTnXq1duhCAlaOh/WxGJZfJu3u7y3qq//OExPkt/DJtYE7MdDciuYtAgtHd0W2kbYIORJQ1uXtTXOm1sKmJjQ9VIm0qWCtSIx3I4HfdnhEpHYdmWjHTtmlN5TreWIpSJX7j7I41JqPwuvqmsfE0vDDv7rmtO1KD3FeK7Rvb7P/q83NSzPK0e+Q7FY/LyRVMQU1FVVVTSjYMISa2CJY143AgeGmUGxEDJyCNfBwSYeKHvjY0DPbI28VaIkEyMIf+tb6/0mVyKCpl3SDkld0MzVnK3U34XUco//OExPQqlDJyKNDNXVCaYfeqVARIJyU3Q1XZBKX6RGfZgNp+7OJs2O1yD0zMzgrg2nnWyKoEG4sQvQbrBEgjhGwpuB/pXuaknTM3F0k75KyghMzlInVUNxRvTwYmreszBZ0iaSirUQjgY5U0V5ga5BjQ+hUhHzcTorFBAP7rV7j0iA4cICalYNEZMZpeGLipzPvcXPEJ51FLREYnGDyfMuq1mjpkv8WAQ0hvGpNjsWpc72XO4ugWjajqEIK4QK4I//OExPYqZCJooE7GeYOKdVsKOIoNTzIU+oCjuoJBHApCDjiabI57K8ZqjDNAQt6obwjjbmJhoHkcbV6lTVlCDDh4RiO8CBg/mzZCDJ2mEVRRHdChhitdQYcK0TBU3FBDNhkE3cMcBhnFJLbo456IJZCScIPNYbA49YxtIH5gSUIxhNFFaSkBeMLg0KqtGVEEwYWjEoAMBHk5oDg4Qr+fhNZrwUCRqYlrUl9i+5LkpJAkPGKWABj8xEFQclDT3VXG//OExP8uRCJkqNbGzRY0cQtqSlOLWzzYsyOmMKddhqDbh4F6hkPmLkWca+0mtdNUzRE3EJx1UpVwyMkXRcaqMVGVSUuMZ69mrB5JRxaWdktFHXLjJGUMuRyuo293pR65sFT3D6arv7VFwhxREpGTtQpGlcylTfiKhXBtHrbDItUt+rMU5RSmnh73cndc3flIBMg6KNITAhGZmYylDRaYkNHtIqGj9wK04vkFygHP6Iz+9mWqKoSUYAhbiImhqY0l//OExPkvPDJYAE8QdBExbhVrwOqlkLzdysSBqzkc4j6hZJSJq607Hqu6o6FeOMAi3B2CxXi76sZJN10xDgmRFIykUGGdwwOk6NDraQ6MPo91KhLIaDCch+OIZ2CKgswaA5QrGU8UpkUzWVkrGcSlIx0Sjg0z2XEB1MSpkPRargLy0SAzOF7FXIWG4wWAQItja6Ax4CX8ZCwhzSAXQxIdRSpZc/t+Sm3gkvllech92YFJAoxztARTEhJyq1J0aZzq//OExO8rxCJUANmHIUZnXAuXj7V1+ortePS3zk435a+YdveYE7fI/bjHzxTLuldjvL41MdN03henTtVsPf18MeU8dNFpNbDmUfNbcdGn2rQLJne32cZ5ytQvY3upHfsb6tqLf5jXlTV4k+98C/h/SmMiqitWVtNtEG3DYw3aILz+SFVFeWPU71JLJ2H7mePYwYBAoKbZhGDmEAOuwwghS7Zh0LFEyIhoRJ2QxFgpF/H7l6aU7R1UCDJj4yJ3luwq//OExPMtTDpMAGbMdFtrKvldzpmqxBNxSbgRhhAkb2NPe5GCq5KZuhISlp3TOA5Et6YLSGptrkxUSZGY8ycmkSmDUocDGdVzN6wO3SqTEpx9B3YvpCaW4azRcGrDk2XqR/Kx+1X0GyttOsVJSDM7q1VWFAyUhsirmDuDEikKEQwGN92uY5/FqSralMGCAzMRDDdkIOY0wTFioWSx1fNGPFkwFH6R1QKKi0FFuarww3CRF0TJ8IOFIHADQ5WOOEVK//OExPArXDJECOZGzpFCC0NKhChDBjK4E5sahR9hJKx0xD1R0HmmmZ92zvYFqOarT/L2I3V1yMWROFjOI0p2BXhqNg+ArzGnex773827NXS5b1ktstp8Xdv1Hzl5mPpI3T+zlmsfp8d56bnSIvk4fK0pO6U+f9Kv0fF3BibKtUqy5TZk1V/d0116CRLNQDjk8AxYGC4CAY54DHEc8onHgBoeDyK0mBJJgw86NT6duyApCSVRsx+9BzCpICT7Lcqp//OExPUshDJE0NjNPSpusv9/iaDZ9p2qs+rtGzcfGwpcOiVKZTIadvxBi+jPqb0Q6MhnucefXfvsTd5YSgXMNpqJ2LpJnLy+906Lax/ndS7N/g1jaq/GsUdf7my9fMs0580t1ZUoS55r5l5WySdly5FEJsy3On5Tpow8Y5OyNuVlacJmPKPKOIsp6oQyxzvVbVBjl+8K44Dg6ZMSmx4lXcRGY8YiBIJBtu0boNuSIA8o7WoX+ZSVYGIF1zUiseJ4//OExPYwFDo4ANpNIDlztu+Y4hceSySZz1ihuho7iqckwY1w1M9ZuXmc7uU5paVsmWZqq6nlW40aIbdQ6RzpGakKhXZiNrMtSrPDNqNsso+hZnAeCPO9tQkDGgNiYKe+KHJJCaMDVXGgCMRWFTKr0orxgQpG07moR6RlP1WSo6Ic1J6CNo+BG6ZMMCyuhgYE7mHApjp4V4KF0spmTNCGSoz4tfSbpLUtkjWogZu4Aoqhk4Jr/ElSgssiy2QNkGXX//OExOgohCo8ENmHJQYQA5JJa9scyWmc6JL2GpjBN5kvi0m+y2ZWb2xtK7ZHyZ0x9u2pJp/e58NeP3yqtpwjLtpsRsM7bTzEPlairXrHSl2h6kypR8487v/wvctFE2DexqCWrkJeNRRBMeuxKjkCQeimq8Tzxm4UTAKzSojkRbUkYqpyVHoEODYgURISxwgpmdSWaloCUkSoAKTwtmBxiJ1GDBVgLqmLTtNS3I1DrdS1RWMkSKU5GFMIq8+sXHa8//OExPku1DosEE7MdOl68xSXO+5f36yuc1Xu78yZbT5a/WpF1GNFT02VrMV37POFxMu3nO7XMNP1F2xsf+tx42sn+sqtq6/bK1m8VjIb+n5s1ivX6PX1Ne5ZpNqRVRsLJHRgDq7QOZLBhFgwGbZhOBJZFaYUdoY2YMlrUigo3iDKEjH/393D6bLkapWBNLMDRpLMzC4DaEDzkNmuVWM9FQAKUP4Vu4X8FDTMsWDaq67zvd8EWZbUcrZWLMIkNKpj//OExPAsJDokAB6MdCs90OARyLEh/Yxjs5SqilQzsZlFWyuZDCLPKiMfMaraq3UxytWrflKVStqUtJWeyIUqGuVHZ5nVPTyUkva1wtUxLEWoHy1JuHW0q5a/I2mvZE9XlE1WJ3FmKizzxG0gMHETonCKYmNqk5I01a3/vFG3LLCRR6FEQYDGDiJxbHCTE1V+zbLfy5Q1hrCalMtpSb9u/9VazMzM37Mx8ZlUqTMwEAgInqs3xmbkAgRrrAzMpVVV//OExPIqrDogEMFTXH5qX9X/1/jf86xb//L2tdf5rBYWV69fRvV6rWWrDvWXrUcx1J40lawoa478qdcVKhqGq1Ossj5iTpbUJ1iNKnSCoVfUpyqnJfScq58fxOidE6HqR1DdE1PEnwmwuRClU2n8TpCmJVH6jZS2qkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//OExPosjDnsADDfPKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//OExEwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
};

function debugTest(){
	if (debugMode != -1) {
		window.console.log("HTML modified: " + document.lastModified);
		window.console.log("Main JS modified: " + document.getElementById("script_lastedited").contentDocument.lastModified);
		window.console.log("Main CSS modified: " + document.getElementById("style_lastedited").contentDocument.lastModified);
	}
}

function summonAudio2(obj) {
	document.getElementById(obj).addEventListener("ended", function() {
		document.getElementById(obj).remove();
	});
	document.getElementById(obj).addEventListener("error", function() {
		window.console.log("Failed to load file " + document.getElementById(obj).src + " for item: " + obj);
		document.getElementById(obj).remove();
	});
}

function summonAudio(obj) {
	var sys_audio = document.createElement("audio");
	sys_aud_id_2 = String(sys_aud_id_1);
	sys_audio.id = sys_aud_id_2;
	sys_aud_id_1++;
	if (sys_aud_id_1 > 511.5) {
		sys_aud_id_1 = 0;
	}
	document.head.appendChild(sys_audio);
	summonAudio2(sys_aud_id_2);
	sys_audio.src = sys_aud_src[obj];
	sys_audio.play();
}

function press(xml, ancestry){
	window.console.log(xml, ancestry);
	switch(xml.behaviour) {
		case "Link":
			break;
		case "ExtLink":
			break;
		case "Procrastinate":
			break;
		default:
	}
}

function hovered(item, type){
}

function createButton(xml, parent, order, menu){
	replace_d = document.createElement("button");
	replace_d.id = "menubox_" + parent + "_" + xml.id;
	replace_d.className = "menubutton";
	replace_d.innerHTML = xml.text;
	replace_d.style.top = ((order + 1) * 20) + "px";
	window.console.log(parent);
	elementThing = document.getElementById("menubox_" + parent);
	elementThing.appendChild(replace_d);

	document.getElementById("menubox_" + parent + "_" + xml.id).addEventListener("mouseover", function(){
		if (buttonLock == false){
			document.getElementById("menubox_" + parent + "_" + xml.id).className = "menubuttonlight";
			summonAudio("menu_pop");
		}
	});

	document.getElementById("menubox_" + parent + "_" + xml.id).addEventListener("click", function(){
		if (xml.behaviour != "Label") {
			if (buttonLock == false){
				buttonLock = true;
				document.getElementById("menubox_" + parent + "_" + xml.id).className = "menubuttonselect";
				summonAudio("menu_sel");

				document.getElementById("script_lastedited").contentWindow.setTimeout(press, 1000, xml, menu);
			}
		}
	});

	document.getElementById("menubox_" + parent + "_" + xml.id).addEventListener("mouseleave", function(){
		if (buttonLock == false){
			document.getElementById("menubox_" + parent + "_" + xml.id).className = "menubutton";
		}
	});
}

function createSubMenu(xml, parent, order){
}

function createMenu(){
}

function editMessage(){
}

function createMessage(){
	replace_e = document.createElement("div");
	replace_e.id = "pageglobal_errorbg";
	elementThing = document.body;
	elementThing.appendChild(replace_e);

	replace_f = document.createElement("div");
	replace_f.id = "pageglobal_errorwidth";
	elementThing = replace_e;
	elementThing.appendChild(replace_f);

	replace_e = document.createElement("div");
	replace_e.id = "pageglobal_errorbox";
	elementThing = replace_f;
	elementThing.appendChild(replace_e);

	replace_f = document.createElement("img");
	replace_f.id = "pageglobal_errorimg";
	replace_f.src = "asset/shared/error_icon.svg";
	elementThing = replace_e;
	elementThing.appendChild(replace_f);

	replace_f = document.createElement("p");
	replace_f.id = "pageglobal_errortxt";
	elementThing = replace_e;
	elementThing.appendChild(replace_f);

	replace_f = document.createElement("button");
	replace_f.id = "pageglobal_errorbutton1";
	elementThing = replace_e;
	elementThing.appendChild(replace_f);

	replace_h = document.createElement("p");
	replace_h.id = "pageglobal_errorbutton1txt";
	elementThing = replace_f;
	elementThing.appendChild(replace_h);

	replace_f = document.createElement("button");
	replace_f.id = "pageglobal_errorbutton2";
	elementThing = replace_e;
	elementThing.appendChild(replace_f);

	replace_f = document.createElement("button");
	replace_f.id = "pageglobal_errorbutton3";
	elementThing = replace_e;
	elementThing.appendChild(replace_f);

	document.getElementById("pageglobal_errorbg").addEventListener("click", function(a){
		if (a.target.id == "pageglobal_errorbg") {
			summonAudio("menu_err");
		}
	});
	document.getElementById("pageglobal_errorwidth").addEventListener("click", function(a){
		if (a.target.id == "pageglobal_errorwidth") {
			summonAudio("menu_err");
		}
	});
}

function buildMenu(xml, parent, order, menu) {
	// Top button
	window.console.log(xml);
	switch(xml.type) {
		case "button":
			createButton(xml, parent, order, menu);
			break;
		case "submenu":
			createSubMenu(xml, parent, order, menu);
			break;
	}
}

function initMenu(xml) {
//	Main frame
	window.console.log(xml);

	replace_a = document.createElement("div");
	replace_a.id = "menubox_" + xml.id;
	replace_a.className = "menubox";
	replace_a.style.position = "absolute";
	replace_a.style.top = xml.y + "px";
	replace_a.style.left = xml.x + "px";
	replace_a.style.width = xml.width + "px";
	replace_a.style.height = ((xml.depth * 20) + 20) + "px";
	if (debugMode != -1) {
		replace_a.style.zIndex = 128;
	}

	elementThing = document.body;
	elementThing.appendChild(replace_a);

	replace_b = document.createElement("button");
	replace_b.id = "menubox_" + xml.id + "_opener";
	replace_b.className = "menuopenbutton";
	replace_b.innerHTML = xml.title;
	elementThing = document.getElementById("menubox_" + xml.id);
	elementThing.appendChild(replace_b);

	replace_c = document.createElement("div");
	replace_c.id = "menubox_" + xml.id + "_container";
	replace_c.className = "menucont";
	replace_c.style.position = "absolute";
	replace_c.style.top = "20px";
	replace_c.style.bottom = "0px";
	replace_c.style.left = "0px";
	replace_c.style.width = "100%";
	elementThing = document.getElementById("menubox_" + xml.id);
	elementThing.appendChild(replace_c);

	for (let menusLoop = 0; menusLoop < xml.menuContents.length; menusLoop++) {
		buildMenu(xml.menuContents[menusLoop], xml.id + "_container", menusLoop, xml.id);
	}
}

function parseMenu(xml) {
	for (let menusTopLoop = 0; menusTopLoop < xml.contents.length; menusTopLoop++) {
		initMenu(xml.contents[menusTopLoop]);
	}
}

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	const myObj = JSON.parse(this.responseText);
	window.console.log(myObj);
	xmlobj = myObj;
	parseMenu(myObj);

//	xmlobj["contents"][0];
};

function initPage() {
	debugMode = ((window.location.search).indexOf("debug=1"));

	pageContent = document.body.innerHTML;
	document.body.innerHTML = "";

	replace_a = document.createElement("div");
	replace_a.id = "pageglobal_headbar";
	elementThing = document.body;
	elementThing.appendChild(replace_a);

	replace_a = document.createElement("div");
	replace_a.id = "pageglobal_contentframe";
	replace_a.style.zIndex = 32;
	elementThing = document.body;
	elementThing.appendChild(replace_a);

//	replace_b = document.createElement("div");
//	replace_b.id = "pageglobal_contentbuffer1";
//	elementThing = replace_a;
//	elementThing.appendChild(replace_b);

//	replace_b = document.createElement("div");
//	replace_b.id = "pageglobal_contentbuffer2";
//	elementThing = replace_a;
//	elementThing.appendChild(replace_b);

	replace_b = document.createElement("div");
	replace_b.id = "pageglobal_content";
	elementThing = replace_a;
	elementThing.appendChild(replace_b);

	replace_b.innerHTML = pageContent;

	replace_c = document.createElement("iframe");
	replace_c.id = "script_lastedited";
	replace_c.style.display = "none";
	replace_c.src = "asset/shared/main.js";
	elementThing = replace_a;
	elementThing.appendChild(replace_c);

	replace_c = document.createElement("iframe");
	replace_c.id = "style_lastedited";
	replace_c.style.display = "none";
	replace_c.src = "asset/shared/main.css";
	elementThing = replace_a;
	elementThing.appendChild(replace_c);

	createMessage();


	window.console.log("debug: " + debugMode);

	document.title = "tlw" + window.location.pathname;

	xmlhttp.open("GET", "asset/shared/menuservice/menucontent.json");
	xmlhttp.send();

	setTimeout(debugTest, 1000);
}