module.exports = {
    
    addAbility: (req: any, res: any) => {
        const {id, abilityContent, rating} = req.body,
              db = req.app.get('db');
        
        db.abilities.add_ability(id, abilityContent, rating)
        .then(() => res.sendStatus(200))
        .catch((err: any) => res.status(500).send(err));
    },
    getAbility: (req:any, res:any) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.abilities.get_ability(id)
        .then((abilities: any) => res.status(200).send(abilities))
        .catch((err: any) => res.status(500).send(err));
    },
    deleteAbility: (req: any, res: any) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.abilities.delete_ability(id)
        .then(() => res.sendStatus(200))
        .catch((err: any) => res.status(500).send(err));
    }
}
